const searchBtn = document.querySelector(".search-box");
const searchDrop = document.querySelector(".search-dropdown");

searchBtn.addEventListener("click", () => {
  searchDrop.classList.toggle("active");
});
