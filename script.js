// Táto funkcia zabezpečí, že kód sa spustí až po načítaní celého HTML
document.addEventListener('DOMContentLoaded', () => {
    console.log("Skript úspešne načítaný.");

    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (!themeToggle) {
        console.error("CHYBA: Tlačidlo s ID 'theme-toggle' nebolo nájdené!");
        return;
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        console.log(`Mením tému z ${currentTheme} na ${newTheme}`);

        htmlElement.setAttribute('data-theme', newTheme);

        // Aktualizácia ikony v tlačidle
        const icon = themeToggle.querySelector('.icon');
        if (icon) {
            icon.textContent = newTheme === 'light' ? '🌙' : '☀️';
        }
    });
});

// Pôvodná funkcia na prepínanie stránok (opravená o prepínanie aktívnych tlačidiel)
function showPage(pageId, btn) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    // Aktualizácia štýlu tlačidiel v navigácii
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active-nav'));
    if (btn) btn.classList.add('active-nav');
}
