/**
 * Logic cho Mobile Menu
 */
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    /**
     * Chuyển đổi trạng thái ẩn/hiện của mobile menu
     */
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Đóng menu khi người dùng nhấp vào một liên kết trong menu di động
    document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Đóng mobile menu nếu đang mở
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
            // Không cần e.preventDefault() vì scroll-behavior: smooth đã được đặt trên body
        });
    });
});
