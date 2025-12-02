document.addEventListener("DOMContentLoaded", () => {
  
  /* =========================================
     1. XỬ LÝ SCROLL ANIMATION (YÊU CẦU 4)
     Cho các phần Menu grid và Store grid
     ========================================= */
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    threshold: 0.15, // Kích hoạt khi thấy 15% element
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // Chỉ chạy animation 1 lần
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));


  /* =========================================
     2. XỬ LÝ POPUP ABOUT US (YÊU CẦU 1)
     ========================================= */
  const openBtn = document.getElementById("open-about");
  const closeBtn = document.getElementById("close-popup");
  const popup = document.getElementById("about-popup");
  const popupBody = document.getElementById("popup-text-body");

  // Dữ liệu giả lập cho nội dung popup
  const aboutContent = `
    <p>Chào mừng đến với Cafe DA HY!</p>
    <p>Được thành lập vào năm 2025, chúng tôi bắt đầu từ một xe đẩy cà phê nhỏ và giờ đây tự hào mang đến cho bạn những không gian thưởng thức nghệ thuật tốt nhất.</p>
    <p>Chúng tôi cam kết sử dụng hạt cà phê Organic 100% và trái cây tươi trong ngày.</p>
  `;

  // Mở Popup
  openBtn.addEventListener("click", () => {
    popupBody.innerHTML = aboutContent;
    popup.classList.add("show");
  });

  // Đóng Popup
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // Đóng khi click ra ngoài vùng tarắng
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });

});