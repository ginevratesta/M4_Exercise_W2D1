export const displayCards = (pics, detail) => 
  `
    <div class="col-lg-3"
     <div class="card">
      <img src="${pics}" class="card-img-top w-100 h-100" alt="Cat pic">
       <div class="card-body">
           <p class="card-text">${detail}</p>
      </div>
    </div>
   </div>`;

