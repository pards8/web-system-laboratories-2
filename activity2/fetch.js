// const getData = () => {

//     fetch('https://jsonplaceholder.typicode.com/todos/100')
// .then(response =>{
//     console.log(response)
//     return response;
// }).then(result =>{
//     const data = result.json()
//     return data
// }).then(data =>{
//     console.log(data)
// }).catch(err =>{
//     console.log(err)
// })

    
// }

// small but terible fetch function

 const getData = async() => {
 const response =    
    await fetch('https://jsonplaceholder.typicode.com/todos/100')
 const data = await response.json()
  return data
 }

console.log(1)
console.log(2)
console.log(3)
console.log(4)
getData().then(data =>{
    console.log(data)
}).catch(err =>{
    console.log(err)
})
console.log(5)





