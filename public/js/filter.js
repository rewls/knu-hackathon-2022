function start() {
  const categories = document.querySelectorAll(".category");
  const items = document.querySelectorAll(".item");

  categories.forEach(category => category.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.dataset.category;
    const cats = document.querySelectorAll(".category");

    items.forEach(item => {
      if (filter === 'all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display='none';
        }
      }
    })

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
