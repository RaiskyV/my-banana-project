<!DOCTYPE html>
<html lang="ru" class="scroll-smooth dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nano Banana Guide | Valery Raisky — Enhanced</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <script async src="https://telegram.org/js/telegram-widget.js?22"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'sans-serif'] },
          colors: {
            'brand-pink': '#f0abfc',
            'brand-purple': '#a855f7',
            'brand-bg-dark': '#111111',
            'brand-bg-light': '#f3f4f6',
            'brand-border': 'rgba(255,255,255,.1)',
            'brand-border-light': 'rgba(0,0,0,.1)',
            'brand-text': '#a3a3a3',
            'brand-text-light': '#d4d4d4'
          },
          keyframes: {
            'fade-up': { '0%': {opacity: 0, transform:'translateY(12px)'}, '100%': {opacity: 1, transform:'translateY(0)'} },
            'pop': { '0%': {transform:'scale(.98)'}, '100%': {transform:'scale(1)'} },
            'shimmer': {
              '0%': { backgroundPosition: '-200% 0' },
              '100%': { backgroundPosition: '200% 0' }
            },
            'pulse-glow': {
              '0%,100%': { boxShadow: '0 0 0 0 rgba(168,85,247,.4)' },
              '50%': { boxShadow: '0 0 40px 6px rgba(168,85,247,.25)' }
            }
          },
          animation: {
            'fade-up': 'fade-up .6s cubic-bezier(.22,.68,0,1) both',
            'pop': 'pop .2s ease-out both',
            'shimmer': 'shimmer 2s linear infinite',
            'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite'
          }
        }
      }
    }
  </script>
  <style>
    body { 
      background-size: cover; 
      background-position: center; 
      background-attachment: fixed;
      /* Base background (dark theme) */
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop');
      position: relative;
      z-index: 0;
    }
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      /* Light theme background on pseudo-element */
      background-image: url('https://images.unsplash.com/photo-1547149631-64c58b37f19d?q=80&w=2070&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      z-index: -1;
      transition: opacity 0.7s ease-in-out;
    }
    /* In dark mode, the light theme overlay is hidden */
    html.dark body::before {
        opacity: 0;
    }
    /* In light mode, the light theme overlay is visible */
    html.light body::before {
        opacity: 1;
    }
    .glass-card { background: rgba(0, 0, 0, 0.2); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid var(--tw-border-brand-border); }
    .light .glass-card { background: rgba(255, 255, 255, 0.4); border: 1px solid var(--tw-border-brand-border-light); }
    .nav-link.active { background-color: rgba(255,255,255,.1); color: white; }
    .light .nav-link.active { background-color: rgba(0,0,0,.08); color: #111827; }
    .loader { border: 4px solid rgba(255,255,255,.2); border-left-color: #a855f7; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    #image-upload-input { display: none; }
    .modal-open { display: block; opacity: 1; transform: translate(-50%, -50%) scale(1); }
    .modal-hidden { display: none; }
    .shimmer-bg {
      background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.25) 50%, rgba(255,255,255,0) 100%);
      background-size: 200% 100%;
    }
    [data-animate] { opacity: 0; transform: translateY(10px); }
    [data-animate].is-visible { opacity: 1; transform: none; animation: fade-up .6s cubic-bezier(.22,.68,0,1) both; }
    #gemini-modal.glass-card {
      background: rgba(20, 20, 22, 0.9);
      -webkit-backdrop-filter: blur(16px);
      backdrop-filter: blur(16px);
    }
    .light #gemini-modal.glass-card {
      background: rgba(243, 244, 246, 0.95);
    }
  </style>
</head>
<body class="antialiased bg-brand-bg-dark text-brand-text transition-colors duration-300">
  <!-- Header -->
  <header class="sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div class="glass-card flex items-center justify-between h-16 rounded-2xl px-4">
        <div class="flex items-center space-x-3">
          <div class="bg-black/20 rounded-lg p-1.5 flex items-center justify-center animate-pulse-glow">
            <iconify-icon icon="lucide:banana" width="24" height="24" class="text-brand-pink"></iconify-icon>
          </div>
          <span class="font-semibold text-gray-900 dark:text-white hidden sm:block">Valery Raisky — Nano Banana</span>
        </div>
        <div class="flex items-center space-x-2 md:space-x-4">
          <button id="theme-toggle" class="px-3 py-1.5 border border-white/10 rounded-lg text-sm font-medium text-gray-900 dark:text-white bg-black/10 dark:bg-white/5 hover:bg-black/20 dark:hover:bg-white/10 transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center gap-2">
            <iconify-icon class="dark:hidden" icon="lucide:sun" width="16" height="16"></iconify-icon>
            <iconify-icon class="hidden dark:inline" icon="lucide:moon-star" width="16" height="16"></iconify-icon>
          </button>
          <div id="auth-area" class="flex items-center">
            <div id="login-buttons" class="flex items-center gap-2">
                <button id="yandex-login-btn" class="px-3 py-1.5 border border-white/10 rounded-lg text-sm font-medium text-gray-900 dark:text-white bg-black/10 dark:bg-white/5 hover:bg-black/20 dark:hover:bg-white/10 transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M512 1024C229.2 1024 0 794.8 0 512S229.2 0 512 0s512 229.2 512 512-229.2 512-512 512zM239 239v546h133.2V512h1.6c11.5 18 24.2 34.1 38.3 48.2L555 785h164.2L531.3 561.4c65.5-38 107.9-105.1 107.9-183.1 0-117.8-88.8-204.3-214.5-204.3H239zm133.2 78.3h76.5c73.3 0 126.8 45.4 126.8 116.1 0 70.7-53.5 116.1-126.8 116.1h-76.5V317.3z"/></svg>
                </button>
                <div id="telegram-login-container"></div>
            </div>
            <div id="user-menu" class="hidden relative">
              <button id="user-button" class="ml-2 flex items-center gap-2 px-2 py-1.5 rounded-xl bg-black/10 dark:bg-white/5 border border-white/10">
                <img id="user-avatar" class="h-7 w-7 rounded-full bg-brand-purple/30" src="" alt="User Avatar"/>
                <span id="user-name" class="hidden sm:inline text-sm text-gray-900 dark:text-white font-medium"></span>
                <iconify-icon icon="lucide:chevron-down" width="16" height="16" class="text-gray-700 dark:text-brand-text"></iconify-icon>
              </button>
              <div id="user-dropdown" class="hidden absolute right-0 mt-2 w-48 glass-card rounded-xl p-2">
                <a href="#" id="logout-btn" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/5 text-sm text-gray-100">
                  <iconify-icon icon="lucide:log-out" width="16" height="16"></iconify-icon> Выйти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <section class="text-center py-16 sm:py-24" data-animate>
      <div class="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Nano Banana —<br />
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple shimmer-bg animate-shimmer">подробный гайд</span>
        </h1>
        <p class="mt-6 max-w-2xl mx-auto text-lg text-gray-800 dark:text-brand-text-light">Практическое руководство: как повторять реальные кейсы, какие входы нужны, как формулировать промпты и чего избегать. Все тексты — на русском.</p>
        <div class="mt-8 flex justify-center items-center gap-4">
          <a href="cases.html" class="px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-gray-700 dark:hover:bg-gray-200 flex items-center gap-2">
            <iconify-icon icon="lucide:gallery-vertical-end" width="18" height="18"></iconify-icon> Смотреть кейсы
          </a>
          <button id="generate-idea-btn" class="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple text-white font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2">
            <iconify-icon icon="lucide:sparkles" width="18" height="18"></iconify-icon> Сгенерировать идею
          </button>
        </div>
        <p id="auth-hint" class="mt-3 text-sm text-gray-700 dark:text-brand-text"><span class="align-middle">🔒</span> Некоторые функции доступны после входа</p>
      </div>
    </section>

    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <aside class="w-full lg:w-1/5" data-animate>
        <nav class="sticky top-24">
          <div class="glass-card rounded-2xl p-2">
            <ul class="space-y-1">
              <li><a href="#vvedenie" class="nav-link flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-800 dark:text-brand-text-light hover:bg-black/10 dark:hover:bg-white/5"><iconify-icon icon="lucide:book-open" width="18" height="18"></iconify-icon><span>Введение</span></a></li>
              <li><a href="generator.html" class="nav-link flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-800 dark:text-brand-text-light hover:bg-black/10 dark:hover:bg-white/5"><iconify-icon icon="lucide:image-up" width="18" height="18"></iconify-icon><span>Генератор</span></a></li>
              <li><a href="#bystryj-start" class="nav-link flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-800 dark:text-brand-text-light hover:bg-black/10 dark:hover:bg-white/5"><iconify-icon icon="lucide:zap" width="18" height="18"></iconify-icon><span>Быстрый старт</span></a></li>
              <li><a href="#sovety" class="nav-link flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-800 dark:text-brand-text-light hover:bg-black/10 dark:hover:bg-white/5"><iconify-icon icon="lucide:lightbulb" width="18" height="18"></iconify-icon><span>Советы</span></a></li>
              <li><a href="cases.html" class="nav-link flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-800 dark:text-brand-text-light hover:bg-black/10 dark:hover:bg-white/5"><iconify-icon icon="lucide:boxes" width="18" height="18"></iconify-icon><span>Кейсы</span></a></li>
              <li><a href="#patt" class="nav-link flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-800 dark:text-brand-text-light hover:bg-black/10 dark:hover:bg-white/5"><iconify-icon icon="lucide:layout-grid" width="18" height="18"></iconify-icon><span>Паттерны</span></a></li>
              <li><a href="#faq" class="nav-link flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-800 dark:text-brand-text-light hover:bg-black/10 dark:hover:bg-white/5"><iconify-icon icon="lucide:help-circle" width="18" height="18"></iconify-icon><span>ЧаВо</span></a></li>
              <li><a href="#license" class="nav-link flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-800 dark:text-brand-text-light hover:bg-black/10 dark:hover:bg-white/5"><iconify-icon icon="lucide:badge-check" width="18" height="18"></iconify-icon><span>Лицензия</span></a></li>
              <li><a href="#contacts" class="nav-link flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-800 dark:text-brand-text-light hover:bg-black/10 dark:hover:bg-white/5"><iconify-icon icon="lucide:at-sign" width="18" height="18"></iconify-icon><span>Контакты</span></a></li>
            </ul>
          </div>
        </nav>
      </aside>

      <main class="w-full lg:w-4/5 relative">
        <div class="space-y-16">
          <section id="vvedenie" class="scroll-mt-24 glass-card rounded-2xl p-6" data-animate>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3"><iconify-icon icon="lucide:info" width="22" height="22"></iconify-icon> Введение</h2>
            <p class="text-gray-800 dark:text-brand-text-light leading-relaxed">Что такое Nano Banana и чем он полезен дизайнеру: мульти-референсы, точное следование промптам, задачи от product-съёмки до комиксов. Это демонстрирует возможности современного image-gen.</p>
          </section>

          <section id="bystryj-start" class="scroll-mt-24 glass-card rounded-2xl p-6" data-animate>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3"><iconify-icon icon="lucide:rocket" width="22" height="22"></iconify-icon> Быстрый старт</h2>
            <p class="text-gray-800 dark:text-brand-text-light leading-relaxed">1) Подготовьте входы. 2) Скопируйте промпт. 3) Следуйте кейсам. 4) Проверяйте детали. 5) Экспорт 4K.</p>
          </section>
          
          <section id="sovety" class="scroll-mt-24 glass-card rounded-2xl p-6" data-animate>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3"><iconify-icon icon="lucide:brain" width="22" height="22"></iconify-icon> Практические советы</h2>
            <ul class="space-y-5 text-gray-800 dark:text-brand-text-light leading-relaxed">
                <li class="flex items-start gap-3">
                    <iconify-icon icon="lucide:check-circle" class="text-brand-purple mt-1 flex-shrink-0"></iconify-icon>
                    <div>
                        <b class="text-gray-900 dark:text-white">Будьте предельно точны.</b>
                        Чем больше деталей вы предоставите, тем лучше будет результат. Вместо «машина» укажите «красный спортивный автомобиль 1970-х годов с откидным верхом, мчащийся по прибрежному шоссе на закате».
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <iconify-icon icon="lucide:check-circle" class="text-brand-purple mt-1 flex-shrink-0"></iconify-icon>
                    <div>
                        <b class="text-gray-900 dark:text-white">Используйте качественные референсы.</b>
                        Загружайте чёткие, хорошо освещённые изображения. Модели будет проще "схватить" черты лица и детали, если на фото нет визуального шума, лишних объектов или размытия.
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <iconify-icon icon="lucide:check-circle" class="text-brand-purple mt-1 flex-shrink-0"></iconify-icon>
                    <div>
                        <b class="text-gray-900 dark:text-white">Управляйте композицией.</b>
                        Используйте фотографические термины для контроля над кадром: «крупный план» (close-up), «широкоугольный объектив» (wide angle shot), «съёмка с нижнего ракурса» (from a low angle), «кинематографическое освещение» (cinematic lighting).
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <iconify-icon icon="lucide:check-circle" class="text-brand-purple mt-1 flex-shrink-0"></iconify-icon>
                    <div>
                        <b class="text-gray-900 dark:text-white">Сохраняйте нужные детали.</b>
                        Если вы хотите изменить только часть изображения, явно укажите, что нужно сохранить. Фраза «Не меняй лицо персонажа» (Don't change the character's face) помогает избежать искажений.
                    </div>
                </li>
                 <li class="flex items-start gap-3">
                    <iconify-icon icon="lucide:check-circle" class="text-brand-purple mt-1 flex-shrink-0"></iconify-icon>
                    <div>
                        <b class="text-gray-900 dark:text-white">Разбивайте сложные задачи.</b>
                        Вместо одного огромного промпта с множеством изменений, попробуйте применять их пошагово. Сначала измените фон, затем одежду, затем добавьте эффекты. Это даёт больше контроля.
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <iconify-icon icon="lucide:check-circle" class="text-brand-purple mt-1 flex-shrink-0"></iconify-icon>
                    <div>
                        <b class="text-gray-900 dark:text-white">Экспериментируйте со стилями.</b>
                        Не бойтесь пробовать разные стили. Добавляйте в промпт «в стиле аниме 90-х», «как фигурка Funko Pop», «в стиле японской гравюры» или «как кадр из фильма в стиле киберпанк».
                    </div>
                </li>
            </ul>
          </section>

          <section id="patt" class="scroll-mt-24 glass-card rounded-2xl p-6" data-animate>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3"><iconify-icon icon="lucide:shapes" width="22" height="22"></iconify-icon> Рабочие паттерны</h2>
            <p class="text-gray-800 dark:text-brand-text-light leading-relaxed">См. ссылки на карточки в разделе «Кейсы».</p>
          </section>

          <section id="faq" class="scroll-mt-24 glass-card rounded-2xl p-6" data-animate>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3"><iconify-icon icon="lucide:messages-square" width="22" height="22"></iconify-icon> ЧаВо</h2>
            <div class="space-y-4 text-gray-800 dark:text-brand-text-light">
              <p><b>Почему не переносится свет/материал?</b> — Проверьте, что указан донор и загружены входы.</p>
              <p><b>Слишком общий промпт?</b> — Уточните камеру, свет, негативы, размер.</p>
              <p><b>Рвётся серия?</b> — Фиксируйте камеру/seed.</p>
            </div>
          </section>

          <section id="license" class="scroll-mt-24 glass-card rounded-2xl p-6" data-animate>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3"><iconify-icon icon="lucide:scale" width="22" height="22"></iconify-icon> Лицензия и благодарности</h2>
            <p class="text-gray-800 dark:text-brand-text-light leading-relaxed">Основано на «Awesome Nano-Banana images» (CC BY 4.0). Адаптация и русская локализация — Valery Raisky.</p>
          </section>

          <footer id="contacts" class="scroll-mt-24 text-center py-10" data-animate>
            <div class="glass-card rounded-2xl p-6 inline-block">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 justify-center"><iconify-icon icon="lucide:send" width="18" height="18"></iconify-icon> Контакты</h3>
              <div class="flex justify-center items-center space-x-6 text-gray-800 dark:text-brand-text-light">
                <a href="https://t.me/iamraisky" target="_blank" class="hover:text-brand-purple transition-colors flex items-center gap-2"><iconify-icon icon="lucide:send" width="16" height="16"></iconify-icon> Telegram</a>
                <a href="mailto:support@nanobananaguide.ru" class="hover:text-brand-purple transition-colors flex items-center gap-2"><iconify-icon icon="lucide:mail" width="16" height="16"></iconify-icon> Поддержка</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  </div>

  <!-- Gemini Modal -->
  <div id="gemini-modal-overlay" class="fixed inset-0 bg-black/70 z-[90] transition-opacity duration-300 opacity-0 pointer-events-none modal-hidden"></div>
  <div id="gemini-modal" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl glass-card rounded-2xl p-6 z-[100] transition-all duration-300 opacity-0 scale-95 modal-hidden flex flex-col max-h-[85vh]">
    <div class="flex-shrink-0 flex items-center justify-between mb-4">
      <h3 id="gemini-modal-title" class="text-xl font-bold text-gray-100 flex items-center gap-2"><iconify-icon icon="lucide:sparkles" class="text-brand-pink"></iconify-icon> Gemini Assistant</h3>
      <button id="gemini-modal-close-btn" class="p-2 rounded-full hover:bg-white/10">
        <iconify-icon icon="lucide:x" width="20" height="20" class="text-brand-text-light"></iconify-icon>
      </button>
    </div>
    <div id="gemini-modal-content" class="overflow-y-auto text-brand-text-light prose prose-invert max-w-none prose-p:my-2 prose-headings:text-white pr-2">
      <!-- Содержимое от Gemini -->
    </div>
  </div>

  <div id="toast" class="fixed bottom-4 left-1/2 -translate-x-1/2 hidden px-4 py-2 rounded-xl glass-card text-white z-[110]"></div>

  <script>
    // ===== Replicate (Nano Banana) — ваш ключ (по вашей просьбе, прямо в клиенте) =====
    const REPLICATE_API_TOKEN = 'r8_FlUNv0x7koDTyD0nGRbFHPTDtNB96LS0leOBR';
    
    // Auth callback for Telegram
    function onTelegramAuth(user) {
      // In a real app, you should send this data to your backend to verify the hash.
      // For this client-side example, we'll trust the data.
      const userData = {
        provider: 'telegram',
        id: user.id,
        displayName: `${user.first_name}${user.last_name ? ' ' + user.last_name : ''}`,
        username: user.username,
        photoUrl: user.photo_url
      };
      
      const authManager = window.authManager;
      if (authManager) {
        authManager.setUser(userData);
        authManager.updateAuthUI();
        authManager.showToast(`Добро пожаловать, ${userData.displayName}!`);
      }
    }


    document.addEventListener('DOMContentLoaded', () => {
      const htmlEl = document.documentElement;
      const themeToggle = document.getElementById('theme-toggle');
      const toast = document.getElementById('toast');
      
      const generateIdeaBtn = document.getElementById('generate-idea-btn');

      function showToast(msg){ toast.textContent = msg; toast.classList.remove('hidden'); setTimeout(()=> toast.classList.add('hidden'), 2200); }
      function setThemeFromStorage(){ 
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
          htmlEl.classList.remove('dark');
          htmlEl.classList.add('light');
        } else {
          htmlEl.classList.add('dark');
          htmlEl.classList.remove('light');
        }
      }
      setThemeFromStorage();
      themeToggle.addEventListener('click', ()=>{ 
          htmlEl.classList.toggle('dark'); 
          htmlEl.classList.toggle('light'); 
          localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light'); 
      });

      // --- Unified Auth Manager ---
      function createAuthManager() {
          const YANDEX_CLIENT_ID = '677fce085aa643879081fc03f8645912';
          const TELEGRAM_BOT_USERNAME = 'BananaRaiskySiteBot';
          const REDIRECT_URI = window.location.origin + window.location.pathname;
          
          const AUTH_KEY = 'nano_banana_user';
          const YANDEX_TOKEN_KEY = 'yandex_token';

          const authArea = document.getElementById('auth-area');
          const loginButtons = document.getElementById('login-buttons');
          const userMenu = document.getElementById('user-menu');
          const userButton = document.getElementById('user-button');
          const userDropdown = document.getElementById('user-dropdown');
          const userAvatar = document.getElementById('user-avatar');
          const userNameEl = document.getElementById('user-name');
          const logoutBtn = document.getElementById('logout-btn');
          const authHint = document.getElementById('auth-hint');
          const yandexLoginBtn = document.getElementById('yandex-login-btn');
          const telegramLoginContainer = document.getElementById('telegram-login-container');

          function getUser() { const u = localStorage.getItem(AUTH_KEY); return u ? JSON.parse(u) : null; }
          function setUser(user) { localStorage.setItem(AUTH_KEY, JSON.stringify(user)); }
          function isAuthed() { return !!getUser(); }
          
          function clearUser() {
              localStorage.removeItem(AUTH_KEY);
              localStorage.removeItem(YANDEX_TOKEN_KEY);
          }

          function getAvatar(user) {
            if (!user) return `https://placehold.co/28x28/a855f7/ffffff?text=?`;
            if (user.provider === 'yandex') {
              return user.is_avatar_empty ? `https://placehold.co/28x28/a855f7/ffffff?text=${(user.display_name || '?')[0]}` : `https://avatars.yandex.net/get-yapic/${user.default_avatar_id}/islands-200`;
            }
            if (user.provider === 'telegram') {
                return user.photoUrl || `https://placehold.co/28x28/3390ec/ffffff?text=${(user.displayName || '?')[0]}`;
            }
            return `https://placehold.co/28x28/a855f7/ffffff?text=?`;
          }

          function updateAuthUI() {
              if (isAuthed()) {
                  const user = getUser();
                  loginButtons.classList.add('hidden');
                  userMenu.classList.remove('hidden');
                  userAvatar.src = getAvatar(user);
                  userNameEl.textContent = user.displayName || user.display_name || user.login;
                  authHint?.classList.add('hidden');
              } else {
                  loginButtons.classList.remove('hidden');
                  userMenu.classList.add('hidden');
                  authHint?.classList.remove('hidden');
              }
          }

          function loginWithYandex() {
              const authUrl = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
              window.location.href = authUrl;
          }

          async function handleYandexCallback() {
              const hash = window.location.hash.substring(1);
              const params = new URLSearchParams(hash);
              const accessToken = params.get('access_token');

              if (accessToken) {
                  localStorage.setItem(YANDEX_TOKEN_KEY, accessToken);
                  try {
                      const response = await fetch(`https://login.yandex.ru/info?format=json&oauth_token=${accessToken}`);
                      if (!response.ok) throw new Error(`Yandex API Error: ${response.status}`);
                      
                      const yandexData = await response.json();
                      const userData = { ...yandexData, provider: 'yandex', displayName: yandexData.display_name };
                      setUser(userData);
                      updateAuthUI();
                      showToast(`Добро пожаловать, ${userData.displayName}!`);
                  } catch (error) {
                      console.error('Ошибка получения данных пользователя Яндекс:', error);
                      showToast('Не удалось войти через Яндекс.');
                  } finally {
                      history.replaceState(null, '', REDIRECT_URI);
                  }
              }
          }

          function createTelegramWidget() {
              const script = document.createElement('script');
              script.async = true;
              script.src = "https://telegram.org/js/telegram-widget.js?22";
              script.setAttribute('data-telegram-login', TELEGRAM_BOT_USERNAME);
              script.setAttribute('data-size', 'medium');
              script.setAttribute('data-onauth', 'onTelegramAuth(user)');
              script.setAttribute('data-request-access', 'write');
              telegramLoginContainer.appendChild(script);
          }

          // Init logic
          yandexLoginBtn.addEventListener('click', loginWithYandex);
          logoutBtn.addEventListener('click', (e) => {
              e.preventDefault();
              clearUser();
              updateAuthUI();
              showToast('Вы вышли из аккаунта');
          });

          userButton.addEventListener('click', () => userDropdown.classList.toggle('hidden'));
          document.addEventListener('click', (e) => { if (userMenu && !userMenu.contains(e.target)) userDropdown.classList.add('hidden'); });

          handleYandexCallback();
          createTelegramWidget();
          updateAuthUI();

          return { setUser, updateAuthUI, showToast };
      }
      
      window.authManager = createAuthManager();

      // Intersection observer for nav
      const sections = document.querySelectorAll('main section, main footer');
      const navLinks = document.querySelectorAll('aside .nav-link');
      const observer = new IntersectionObserver((entries)=>{ 
        entries.forEach(entry=>{ 
          if(entry.isIntersecting){ 
            const id=entry.target.id; 
            navLinks.forEach(l=> l.classList.toggle('active', l.getAttribute('href').replace('#','')===id)); 
          } 
        }); 
      }, { rootMargin: '-50% 0px -50% 0px' });
      sections.forEach(s=>observer.observe(s));

      // Reveal on scroll for any [data-animate]
      const revealObserver = new IntersectionObserver((entries)=>{
        for (const entry of entries){
          if(entry.isIntersecting){ entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
        }
      }, { threshold: .12 });
      document.querySelectorAll('[data-animate]').forEach(el=> revealObserver.observe(el));
      
      // ===== Gemini API Functionality =====
      const apiKey = "AIzaSyAfxN5kHgrXQC0EH6gd3A8-TG-3edlz9BI";
      const geminiModal = document.getElementById('gemini-modal');
      const geminiModalOverlay = document.getElementById('gemini-modal-overlay');
      const geminiModalTitle = document.getElementById('gemini-modal-title');
      const geminiModalContent = document.getElementById('gemini-modal-content');
      const geminiModalCloseBtn = document.getElementById('gemini-modal-close-btn');

      function showGeminiModal(title, content) {
        geminiModalTitle.innerHTML = `<iconify-icon icon="lucide:sparkles" class="text-brand-pink"></iconify-icon> ${title}`;
        geminiModalContent.innerHTML = content;
        geminiModalOverlay.classList.remove('modal-hidden', 'opacity-0', 'pointer-events-none');
        geminiModal.classList.remove('modal-hidden', 'opacity-0', 'scale-95');
      }

      function closeGeminiModal() {
        geminiModalOverlay.classList.add('opacity-0', 'pointer-events-none');
        geminiModal.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
          geminiModalOverlay.classList.add('modal-hidden');
          geminiModal.classList.add('modal-hidden');
        }, 300);
      }

      geminiModalCloseBtn.addEventListener('click', closeGeminiModal);
      geminiModalOverlay.addEventListener('click', closeGeminiModal);

      function markdownToHtml(text) {
        if (!text) return '';
        let html = text
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/^### (.*$)/gim, '<h3 class="font-bold text-lg mb-2">$1</h3>')
          .replace(/^## (.*$)/gim, '<h2 class="font-bold text-xl mb-3">$1</h2>')
          .replace(/^\* (.*$)/gim, '<ul class="list-disc list-inside my-2"><li>$1</li></ul>')
          .replace(/<\/ul>\s*<ul class="list-disc list-inside my-2">/g, '')
          .replace(/\n/g, '<br>');
        return html;
      }

      async function callGemini(prompt, retries = 3, delay = 1000) {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
        for (let i = 0; i < retries; i++) {
          try {
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            if (!response.ok) {
              throw new Error(`API Error: ${response.status}`);
            }
            const result = await response.json();
            return result.candidates?.[0]?.content?.parts?.[0]?.text || "Не удалось получить ответ.";
          } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(res => setTimeout(res, delay * (i + 1)));
          }
        }
      }

      generateIdeaBtn.addEventListener('click', async () => {
        showGeminiModal('Генерация новой идеи', '<div class="flex justify-center items-center p-8"><div class="loader"></div></div>');
        const userPrompt = `Придумай новую креативную идею для кейса по генерации изображений с помощью AI. Опиши идею на русском, дай ей название на русском и напиши подробный, качественный промпт на английском языке, который можно использовать для генерации. Ответ верни в виде чистого Markdown.`;
        try {
          const idea = await callGemini(userPrompt);
          showGeminiModal('Новая идея для кейса', markdownToHtml(idea));
        } catch (error) {
          console.error("Gemini API Error:", error);
          showGeminiModal('Ошибка', `<p class="text-red-400">Произошла ошибка при обращении к Gemini API: ${error.message}</p>`);
        }
      });
    });
  </script>
</body>
</html>

