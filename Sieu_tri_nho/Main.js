const toggle = document.getElementById("navbar-toggle");
const links = document.getElementById("navbar-links");
const container = document.querySelector(".container-common");

function updateContentMargin() {
  // Kiểm tra nếu menu đang mở và trên mobile
  if (links.classList.contains("open") && window.innerWidth <= 768) {
    // Lấy chiều cao của navbar-links
    const linksHeight = links.scrollHeight;
    // Đặt margin-top cho nội dung để đẩy xuống dưới
    container.style.marginTop = linksHeight + 10 + "px"; // 70 là chiều cao navbar
  } else {
    container.style.marginTop = "";
  }
}

toggle.addEventListener("click", function () {
  links.classList.toggle("open");
  updateContentMargin();
});

// Đóng menu khi click ngoài
document.addEventListener("click", function (e) {
  if (!toggle.contains(e.target) && !links.contains(e.target)) {
    links.classList.remove("open");
    updateContentMargin();
  }
});

// Cập nhật lại margin khi resize cửa sổ
window.addEventListener("resize", function () {
  updateContentMargin();
});
