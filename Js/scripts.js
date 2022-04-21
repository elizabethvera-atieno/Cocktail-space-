document.addEventListener('DOMContentLoaded', () => {
    const cocktails = document.querySelector('div#cocktails')
    const searchForm = document.querySelector('form.searchForm')

    function getCocktail(name='m'){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(response => response.json())
        .then(result => {
            const data = result.drinks
        for(let i=0; i<12 ;i++){
            loadDrinks(data[i])
            console.log(data[i])
        }
        })
    }

    getCocktail()
    searchForm.addEventListener('submit',(e) =>{
        e.preventDefault()
        const userInput = searchForm["search"].value
        cocktails.innerHTML= ''
        getCocktail(userInput)
    })


    function loadDrinks(drink){
        const imgdiv = document.createElement('div')
        const img = `
        <div class="card">
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
        <h3 id ="imagelabel" > ${drink.strDrink} </h3>
        <div id="info"> </div>
        </div>
        `
        imgdiv.innerHTML = img
        cocktails.appendChild(imgdiv)
        const infoDiv = imgdiv.querySelector('div#info')
        imgdiv.addEventListener('click', ()=>{
            getInfo(drink,infoDiv)
        })
    }
    function getInfo(drink,container){
        container.innerHTML=`<p> List of ingredients:</P>
        <ul> <li> ${drink.strIngredient1} </li>
        <li> ${drink.strIngredient2} </li>
        <li> ${drink.strIngredient3} </li>
        </ul>
        <p> <em>Instructions</em> </p>
        <p>${drink.strInstructions}</p>`
    }







    function feedBackSection(){
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
            feedBackForm.reset()
        })
    }
    feedBackSection()
})
