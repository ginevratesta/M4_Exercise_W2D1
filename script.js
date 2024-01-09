// fetch('https://api.pexels.com/v1/search?query=gatto',{
//     headers: {
//         'authorization': 'fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm'
//     }
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))


// self invoked function - IIFE
(async() => {
    const response = await fetch('https://api.pexels.com/v1/search?query=gatto',{
        headers: {
            'authorization': 'fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm'
        }
    })
   const data = await response.json()
})() 

fetch('https://api.pexels.com/v1/search?query=gatto',{
headers: {
    'authorization': 'fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm'
}
})
.then(res => res.json())
.then(data => {
    const items = data.photos;
    for(item of items){
        const pics = item.src.medium; 
        const detail = item.alt;
    }
    console.log(pics,detail);
})
.catch(error => console.error(error))