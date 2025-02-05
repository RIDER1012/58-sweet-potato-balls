// 當頁面載入完成時執行
document.addEventListener('DOMContentLoaded', function() {
    // 為菜單項目添加點擊效果
    const menuItems = document.querySelectorAll('.item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
}); 