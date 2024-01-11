import {displayCards} from './components.js';

const cards = document.querySelector(".row");

fetch("https://api.pexels.com/v1/search?query=strawberries", {
  headers: {
    authorization: "fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const items = data.photos;
    items.map((item) => {
    cards.innerHTML +=  displayCards(item.src.medium, item.alt)
    })
  })
  .catch((error) => {console.error(error)
    alert(`Error: ${error}`)
  });






