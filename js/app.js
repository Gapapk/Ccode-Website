document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const defaultLang = localStorage.getItem('preferred-language') || 'en';

    window.switchLanguage = function(lang) {
        if (!locales[lang]) locales[lang] = {};

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let value = locales[lang];

            keys.forEach(key => {
                if (value) value = value[key];
            });

            if (value) {
                el.textContent = value;
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.lang-btn[onclick="switchLanguage('${lang}')"]`);
        if (activeBtn) activeBtn.classList.add('active');

        localStorage.setItem('preferred-language', lang);
        document.documentElement.lang = lang;
    };

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-apk');
        if (btn) {
            e.preventDefault();
            alert('РћР±РЅРѕРІР»РµРЅРёРµ РµС‰С‘ РЅРµ РІС‹С€Р»Рѕ :(');
        }
    });

    switchLanguage(defaultLang);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});
