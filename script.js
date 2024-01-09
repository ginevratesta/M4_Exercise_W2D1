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

fetch("https://api.pexels.com/v1/search?query=gatto", {
  headers: {
    authorization: "fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const arrayOfCats = data.photos;
    const cards = document.querySelector(".row");
    for (picsOfCats of arrayOfCats) {
      const pics = picsOfCats.src.medium;
      const detail = picsOfCats.alt;
      console.log(pics, detail);
      cards.innerHTML += `
        <div class="col-lg-3"
         <div class="card">
          <img src="${pics}" class="card-img-top" alt="Cat pic">
           <div class="card-body">
               <p class="card-text">${detail}</p>
          </div>
        </div>
       </div>`;
    }
  })
  .catch((error) => console.error(error));
