import {displayCards} from './components.js';

// self invoked function - IIFE

// (async () => {
//   const response = await fetch("https://api.pexels.com/v1/search?query=gatto", {
//     headers: {
//       authorization: "fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm",
//     },
//   });
//   const data = await response.json();
// })();
// fetch("https://api.pexels.com/v1/search?query=gatto", {
//   headers: {
//     authorization: "fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

const cards = document.querySelector(".row");

fetch("https://api.pexels.com/v1/search?query=clowns", {
  headers: {
    authorization: "fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const items = data.photos;
    items.map((item) => {
    // renderizza qualcosa
    cards.innerHTML +=  displayCards(item.src.medium, item.alt)
    })

  })
  .catch((error) => console.error(error));





//     for (itemFromArray of items) {
//       const pics = itemFromArray.src.medium;
//       const detail = itemFromArray.alt;
//       console.log(pics, detail);
//       cards.innerHTML += `
//         <div class="col-lg-3"
//          <div class="card">
//           <img src="${pics}" class="card-img-top" alt="Cat pic">
//            <div class="card-body">
//                <p class="card-text">${detail}</p>
//           </div>
//         </div>
//        </div>`;
//     }
//   })
