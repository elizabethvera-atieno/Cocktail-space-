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