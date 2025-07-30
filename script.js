document.getElementById('contactBtn').addEventListener('click', function() {
    window.open('https://t.me/zxcarnagez2', '_blank');
});

// Анимация пунктов при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.info-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
    });
});
