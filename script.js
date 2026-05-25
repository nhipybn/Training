// Xử lý cuộn trang mượt mà (Smooth Scroll) cho các thẻ a có dấu #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Trừ đi chiều cao của header (80px)
                behavior: 'smooth'
            });
        }
    });
});

// Bắt sự kiện Gửi Form Đặt Hàng
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn tải lại trang
    
    // Ở đây có thể gắn mã API gửi Google Sheet hoặc gửi Email
    // Tạm thời hiển thị thông báo thành công
    alert('Cảm ơn bạn đã đặt hàng! Trà Thái sẽ liên hệ với bạn trong thời gian sớm nhất.');
    
    // Reset form sau khi gửi
    this.reset();
});