const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
})

const setErr = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.queryselector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = ('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const  validateInputs = () => {
    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErr(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(phoneValue === '') {
        setErr(phone, 'Phone Number is required');
    } else {
        setSuccess(phone);
    }

    if(email === '') {
        setErr(email, 'Email is required');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setErr(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setErr(password, 'Password must be at least 8 character')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setErr(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setErr(password2, "Password doesn't match")
    } else {
        setSuccess(password2);
    }
}
function getdata() {
    let username = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
document.getElementById('input-name').innerHTML = username
document.getElementById('input-phone').innerHTML = phone
document.getElementById('input-email').innerHTML = email
}