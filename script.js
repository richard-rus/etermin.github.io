document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    btn?.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        btn.textContent = isDark ? '🌙' : '☀️';
    });
});

// Switch Pages
function showPage(id, btn) {
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === id));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active-nav', b === btn));
}
