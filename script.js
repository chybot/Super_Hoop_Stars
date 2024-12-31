document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const gameIframe = document.querySelector('.game-container iframe');
    const loadingOverlay = document.querySelector('.loading-overlay');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.loading-text span');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // 点击菜单项后关闭菜单
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 模拟加载进度
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        
        if (progress === 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingOverlay.classList.add('fade-out');
            }, 500);
        }
    }, 500);

    // 监听iframe加载完成
    gameIframe.addEventListener('load', function() {
        progress = 100;
        progressBar.style.width = '100%';
        progressText.textContent = '100%';
        clearInterval(loadingInterval);
        setTimeout(() => {
            loadingOverlay.classList.add('fade-out');
        }, 500);
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