const sidebar = document.querySelector(".sidebar"),
  sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
}