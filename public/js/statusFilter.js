function startStatusFilter() {
  const categories = document.querySelectorAll(".category-status");
  const item_count = document.getElementById("item-count");
  let items = document.querySelectorAll(".item");
  let count;

  categories.forEach(category => category.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.dataset.category;
    const cats = document.querySelectorAll(".category-status");
    items = document.querySelectorAll(".item");
    count = 0;

    items.forEach(item => {
      if (filter === 'all') {
        item.style.display = 'block';
        count++;
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = 'block';
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
