// api/upload.js
import fetch from 'node-fetch';

// Вспомогательная функция для преобразования данных изображения
function dataURLtoBuffer(dataURL) {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const buffer = Buffer.from(arr[1], 'base64');
    return { buffer, type: mime };
}

export default async function handler(req, res) {
    // Принимаем только POST-запросы
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const { prompt, images } = req.body;

    if (!prompt || !images || images.length === 0) {
        return res.status(400).json({ message: 'Требуется промпт и хотя бы одно изображение.' });
    }

    try {
        const replicateApiToken = process.env.REPLICATE_API_TOKEN;
        if (!replicateApiToken) {
            throw new Error("REPLICATE_API_TOKEN is not set.");
        }

        // Шаг 1: Загружаем все изображения на Replicate, чтобы получить публичные URL
        const uploadedImageUrls = await Promise.all(
            images.map(async (imgDataUrl) => {
                const { buffer, type } = dataURLtoBuffer(imgDataUrl);
                const uploadResponse = await fetch("https://api.replicate.com/v1/files", {
                    method: "POST",
                    headers: {
                        "Authorization": `Token ${replicateApiToken}`,
                        "Content-Type": type,
                    },
                    body: buffer,
                });
                const uploadResult = await uploadResponse.json();
                if (!uploadResponse.ok) throw new Error(uploadResult.detail);
                return uploadResult.upload_url;
            })
        );
        
        // Шаг 2: Вызываем модель Nano Banana с промптом и ссылками на изображения
        const predictionResponse = await fetch("https://api.replicate.com/v1/models/google/nano-banana/predictions", {
            method: "POST",
            headers: {
                "Authorization": `Token ${replicateApiToken}`,
                "Content-Type": "application/json",
                "Prefer": "wait", // Ждём результат синхронно
            },
            body: JSON.stringify({
                input: {
                    prompt: prompt,
                    image_input: uploadedImageUrls.join('|'),
                },
            }),
        });

        if (!predictionResponse.ok) {
            const error = await predictionResponse.json();
            throw new Error(error.detail);
        }

        const predictionResult = await predictionResponse.json();
        
        // Возвращаем ссылку на готовое изображение
        res.status(200).json({ output_url: predictionResult.output[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера.', detail: error.message });
    }
}