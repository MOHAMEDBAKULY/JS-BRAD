try{
    console.log(simple)

}catch(error){
   console.log('Error' + error)
}


const double = (number)  => {
    if(isNaN(number)){
        throw new Error(number + 'is not a number')
    }

    return number + 10
}


try{
const y = double(io)
console.log(y)
}catch(error){
  console.log(error)
}