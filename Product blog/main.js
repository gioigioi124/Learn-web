const thumbnails = document.querySelectorAll(".thumbnail");
const overlay = document.getElementById("imageOverlay");
const largeImage = document.getElementById("largeImage");
const closeInImage = document.getElementById("closeInImage");
const nextBtn = document.getElementById("nextInImage");
const prevBtn = document.getElementById("prevInImage");

// Lưu danh sách src các ảnh thumbnail
const imageList = Array.from(thumbnails).map(thumb => thumb.src);
let currentIndex = 0;

// Lấy tất cả các nhóm thumbnail (dùng class 'thumbnail-list' và các nhóm trong bình luận)
const commentThumbnailGroups = document.querySelectorAll('.d-flex.flex-wrap.gap-2');
const productThumbnailGroup = document.querySelector('.thumbnail-list');

let currentGroup = null;

// Xử lý cho nhóm ảnh thật sản phẩm
if (productThumbnailGroup) {
  const productThumbnails = productThumbnailGroup.querySelectorAll('.thumbnail');
  productThumbnails.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
      currentGroup = Array.from(productThumbnails);
      currentIndex = idx;
      showLargeImage();
    });
  });
}

// Xử lý cho từng nhóm thumbnail trong bình luận
commentThumbnailGroups.forEach(group => {
  const thumbs = group.querySelectorAll('.thumbnail');
  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
      currentGroup = Array.from(thumbs);
      currentIndex = idx;
      showLargeImage();
    });
  });
});

function showLargeImage() {
  if (!currentGroup) return;
  largeImage.src = currentGroup[currentIndex].src;
  overlay.style.display = 'flex';
}

// Nút next
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!currentGroup) return;
  currentIndex = (currentIndex + 1) % currentGroup.length;
  showLargeImage();
});

// Nút prev
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!currentGroup) return;
  currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
  showLargeImage();
});

// Đóng khi nhấn nút tắt trong ảnh
closeInImage.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Ngoài ra, có thể đóng khi click ngoài ảnh
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});
