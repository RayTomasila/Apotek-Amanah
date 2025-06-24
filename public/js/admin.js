document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggleArrow = document.querySelector('#sidebar-arrow');
  const mainContent = document.getElementById('main-content');
  const sideLinks = document.querySelectorAll('.sideLinkToggle');

  // Toggle sidebar
  toggleArrow.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('sideBarClosed');
    mainContent.classList.toggle('shifted');
  });

  sideLinks.forEach(link => {
    link.addEventListener('click', function () {
      localStorage.setItem('activeLink', this.getAttribute('href'));
    });
  });

  const activeHref = localStorage.getItem('activeLink');
  if (activeHref) {
    sideLinks.forEach(link => {
      if (link.getAttribute('href') === activeHref) {
        link.classList.add('is-active');
      }
    });
  }

});
