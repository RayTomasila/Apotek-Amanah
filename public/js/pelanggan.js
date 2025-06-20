document.addEventListener("DOMContentLoaded", () => {
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

  
  // Pagination
  const itemsPerPage = 10;
  const items = document.querySelectorAll('.items');
  const pageLinks = document.querySelectorAll('.page-link[data-page]');
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  let currentPage = 1;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  function showPage(page) {
    currentPage = page;
    items.forEach((item, i) => {
      item.classList.toggle('hidden', !(i >= (page - 1) * itemsPerPage && i < page * itemsPerPage));
    });

    pageLinks.forEach(link => {
      link.parentElement.classList.toggle('active', parseInt(link.dataset.page) === currentPage);
    });

    prevBtn.classList.toggle('disabled', currentPage === 1);
    nextBtn.classList.toggle('disabled', currentPage === totalPages);
  }

  pageLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showPage(parseInt(link.dataset.page));
    });
  });

  prevBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  });

  nextBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentPage < totalPages) {
      showPage(currentPage + 1);
    }
  });

  showPage(1);

  // Tambah baru dibawah sini  
 });