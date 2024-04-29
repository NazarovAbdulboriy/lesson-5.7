// const cars = ["BMW", "Equinox", "Merc", "Supara", "Spark"]

// const body =document.querySelector('body') 
// cras.maps(items =>{
//     const texts =document.createElement("p")
//     texts.innerHTML = items
//     body.appendChild(texts)
// })

// cars.forEach(items => {
//     const texts =document.createElement("p")
//     texts.innerHTML = items
//     body.appendChild(texts)
// })


// const numbers = [1, 2, 3, 4, 5, 56, 78, 345]
// numbers.map(items =>{items>5 && console.log();})
// console.log("Boxosh   jim otir");

// numbers.forEach(items => {
//     if(items > 5){
//         console.log(items);
//     }
// })



let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
const body = document.querySelector('body')
data.map(items => {
    const text = document.createElement('p')
    text.innerHTML = items
    body.appendChild(text)
    text.style.textAlign = "center"
    text.style.margin = "30px"
    text.style.color = "white"
    if (items > 50) {
        text.style.background = "green"
    } else {
        text.style.background = "red"
    }
})