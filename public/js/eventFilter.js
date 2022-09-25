function startEventFilter() {
  const categories = document.querySelectorAll(".category-event");
  const item_count = document.getElementById("item-count");
  let items = document.querySelectorAll(".status-block");
  let count;

  categories.forEach(category => category.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.dataset.category;
    const cats = document.querySelectorAll(".category-event");
    items = document.querySelectorAll(".status-block");
    count = 0;

    items.forEach(item => {
      if (item.classList.contains("event-block")) {
        item.classList.remove("event-block");
      }
      if (filter === 'all') {
        item.style.display = 'block';
        item.classList.add('event-block');
        count++;
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = 'block';
          item.classList.add('event-block');
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

startEventFilter();