function start() {
  const categories = document.querySelectorAll(".category");
  const items = document.querySelectorAll(".item");

  categories.forEach(category => category.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.dataset.category;
    const cats = document.querySelectorAll(".category");
    console.log(filter);
    console.log(items);


    items.forEach(item => {
      console.log(item);
      if (filter === 'all') {
        item.style.display = 'block';
      } else {
        console.log(item);
        if (item.classList.contains(filter)) {
          console.log(item);
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
