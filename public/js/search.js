function startSearch () {
  let search = document.querySelectorAll(".search");
  let items = document.querySelectorAll(".item");
  const item_count = document.getElementById("item-count");
  let count;

  search = document.addEventListener('keyup', (event) => {
    const searchFilter = event.target.value.toLowerCase().trim()
    items = document.querySelectorAll(".item");
    console.log(event.target.value);

    count = 0;
    items.forEach((item) => {
      if (item.textContent.includes(searchFilter)) {
        count++;
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    })

    item_count.textContent = count;
  })

  search
}

startSearch();
