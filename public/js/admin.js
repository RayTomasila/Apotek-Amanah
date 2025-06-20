document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggleArrow = document.querySelector('#sidebar-arrow');
  const main = document.getElementById('main-content');
  const sideLinks = document.querySelectorAll('.sideLinkToggle');

  // Toggle sidebar
  toggleArrow.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('sideBarClosed');
    main.classList.toggle('shifted');
  });

  // kasih warna aktif link sidebar
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


  // Dropdown
  const dropdown = document.querySelector(".custom-dropdown");
  const selected = dropdown.querySelector(".selected");
  const list = dropdown.querySelector(".dropdown-list");
  const hiddenInput = dropdown.querySelector("input");

  // Sidebar links
  selected.addEventListener("click", () => {
    list.style.display = list.style.display === "block" ? "none" : "block";
  });

  list.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;
      hiddenInput.value = item.dataset.value;
      list.style.display = "none";
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      list.style.display = "none";
    }
  });

});
