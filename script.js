const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});
const scrollBottomBtn = document.getElementById('scrollBottomBtn');

if (scrollBottomBtn) {
    scrollBottomBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
}