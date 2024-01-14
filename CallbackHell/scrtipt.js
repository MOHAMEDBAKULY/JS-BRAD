const getData = (endpoint) => {

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange =  function () {
        if(this.readyState === 4 ){
        if(this.status === 200){
          cb(JSON.parse(this.responseText))
        }
       reject("Something went wrong on  our side")
        }
    }

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000)
  })

}

