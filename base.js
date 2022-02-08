function EmailValidation(e){
    const email = e.target.value
    console.log(emailInput)
    var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email.match(mail_format)) {
        // alert('Yeah a valid email');
    } else {
        document.querySelector('button').disabled = true
        alert('Sorry! an invalid email');
    }
}

const form = document.querySelector('form')
const inputEmail = document.querySelector('input[type="email"]')
form.addEventListener('submit', EmailValidation)
// inputEmail.addEventListener('change', EmailValidation)
