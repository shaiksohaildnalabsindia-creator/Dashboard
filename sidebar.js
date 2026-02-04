const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleSidebar() {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");
  } else {
    document.body.classList.toggle("sidebar-collapsed");
  }
}

function closeSidebar() {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
}
