// Grab DOM elements once the page loads
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent'); // ensure your main content has this ID

  // Check LocalStorage to remember the user's preference on page load
  if (localStorage.getItem('sidebarCollapsed') === 'true') {
    sidebar.classList.add('collapsed');
    if (mainContent) {
      mainContent.classList.add('sidebar-collapsed');
    }
  }

  // Click outside sidebar on mobile closes it automatically
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !e.target.closest('.menu-btn')) { // ensure your mobile hamburger button has the class 'menu-btn'
      sidebar.classList.remove('open');
    }
  });
});

// Function to handle top header dashboard click
function goToDashboard() {
  window.location.href = 'index.html'; // Update this to your actual dashboard route
}

// Function to handle mobile menu button click
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

// Function to handle the desktop collapse arrow
function toggleCollapse() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');
  
  sidebar.classList.toggle('collapsed');
  
  if (mainContent) {
    mainContent.classList.toggle('sidebar-collapsed');
  }
  
  // Save preference to LocalStorage
  localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
}
