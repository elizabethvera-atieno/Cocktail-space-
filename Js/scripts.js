document.addEventListener('DOMContentLoaded', () => {
    const cocktails = document.querySelector('div#cocktails')
const ingredients = document.querySelector('div#ingredients')

fetch('http://localhost:3000/drinks')
.then(response => response.json())
.then(data => {
   for(let i=0; i<12 ;i++){
       loadDrinks(data[i])
       console.log(data[i])
   }
})
function loadDrinks(drink){
    const imgdiv = document.createElement('div')
    const img = `
    <div class="card">
    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
    <p id ="imagelabel"> ${drink.strDrink} </p>
    </div>
    `
    imgdiv.innerHTML = img
    cocktails.appendChild(imgdiv)
}







function feeBackSection(){
    const feedBackForm = document.getElementById('form')
    feedBackForm.addEventListener('submit',(event)=>{
        event.preventDefault()
        const yourName = document.querySelector('input#name')
        const email = document.querySelector('input#email')
        const message = document.querySelector('textarea#message')
        if(yourName.value && email.value){
            alert(`Hey ${yourName.value}. Thank you for your feedback. Enjoy your Cocktail!`)
        }else{
            alert(`Please fill out all the sections in the feedback form before you submit!!`)
        }
    })
}
feeBackSection()
})