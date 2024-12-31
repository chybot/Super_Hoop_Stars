document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // 点击菜单项后关闭菜单
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});

document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        const span = this.querySelector('span');
        let likes = parseInt(span.textContent);
        span.textContent = likes + 1;
        
        // 切换点赞图标
        const icon = this.querySelector('i');
        icon.classList.remove('far');
        icon.classList.add('fas');
        
        // 禁用按钮
        this.disabled = true;
        this.style.opacity = '0.7';
    });
}); 