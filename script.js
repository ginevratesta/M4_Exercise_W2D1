// fetch('https://api.pexels.com/v1/search?query=gatto',{
//     headers: {
//         'authorization': 'fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm'
//     }
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))


//self invoked function IIFE
(async() => {
    const response = await fetch('https://api.pexels.com/v1/search?query=gatto',{
        headers: {
            'authorization': 'fleEjrFkHZgMxtSgwXjLcn8VDvBSo4xHjoQbCwIF42goR6dhhsdCATgm'
        }
    })
   const data = await response.json()
   console.log(data)
})() 