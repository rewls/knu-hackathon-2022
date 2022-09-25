function startStatusFilter() {
  const categories = document.querySelectorAll(".category-status");
  const item_count = document.getElementById("item-count");
  let items = document.querySelectorAll(".event-block");
  let count;

  categories.forEach(category => category.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.dataset.category;
    const cats = document.querySelectorAll(".category-status");
    items = document.querySelectorAll(".event-block");
    count = 0;

    items.forEach(item => {
      if (item.classList.contains("status-block")) {
        item.classList.remove("status-block");
      }
      if (filter === 'all') {
        item.style.display = 'block';
        item.classList.add('status-block');
        count++;
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = 'block';
          item.classList.add('status-block');
          count++;
        } else {
          item.style.display='none';
        }
      }
    })
    item_count.textContent = count;

    cats.forEach(cat => {
      if (cat.classList.contains("active")) {
        cat.classList.remove("active");
      }
    })
    event.target.classList.add("active");
  })
  )
}

startStatusFilter();