// test with res.ok
// fetch('http://httpstat.us/404')
   //   .then((res) => {
      //  if(!res.ok){
         // throw new Error('Request Failed ')
      //  }
      //   return res;
   //   })
   //   .then(() => {
      //   console.log('Success')
   //   })
   //   .catch((error) => {
      // console.log(error)
   //   })

   // Test with res.status to check for specigic code
   
   fetch('http://httpstat.us/416')
   .then((res) => {
     if(res.status === 404){
        throw new Error('Not Found')
      } else if( res.status === 500){
         throw new Error('Server Error')
      } else if(res.status !== 200){
         throw new Error('Request Failed')
      } else if (res.status === 416){
         throw new Error('Requested range not satisfiable')
      } else if (res.status === 505){
      throw new Error('HTTP Version Not supported')
     }
      return res;
   })
   .then(() => {
        console.log('success')
   })
   .catch((error) => {
      console.log(error)
   })



// Catch runs on a network Error
// fetch('http://Gahunn')
   //   .then((res) => {
      //   return res;
   //   })
   //   .then(() => {
      //   console.log('Success')
   //   })
   //   .catch((error) => {
      // console.log(error)
   //   })
// 

// console.log(res.ok)
// console.log(res.status)
// console.log(res.statusText)
