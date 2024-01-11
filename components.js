export const displayCards = (pics, detail) => 
  `
    <div class="col-12 col-sm-12 col-md-6 col-lg-3"
     <div class="card">
      <img src="${pics}" class="card-img-top w-100 h-100" alt="Cat pic">
       <div class="card-body bg-warning">
           <p class="card-text text-center text-white">${detail}</p>
      </div>
    </div>
   </div>`;

