document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".hm_features__item");
  const container = document.querySelector(".hm_features__content");

  if (items.length > 0) {
    // Mặc định item đầu tiên có class is-hover
    items[0].classList.add("is-hover");

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        items.forEach((el) => el.classList.remove("is-hover"));
        item.classList.add("is-hover");
      });
    });

    // Khi chuột rời khỏi toàn bộ container, reset về item đầu tiên
    container.addEventListener("mouseleave", () => {
      items.forEach((el) => el.classList.remove("is-hover"));
      items[0].classList.add("is-hover");
    });
  }
});
