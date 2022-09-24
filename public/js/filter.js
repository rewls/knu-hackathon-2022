function start() {
  const categories = document.querySelectorAll(".category");
  const items = document.querySelectorAll(".item");
  const item_count = document.getElementById("item-count");
  let count;

  categories.forEach(category => category.addEventListener("click", (event) => {
    event.preventDefault();
    const items = document.querySelectorAll(".item");
    const filter = event.target.dataset.category;
    const cats = document.querySelectorAll(".category");
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

start();
