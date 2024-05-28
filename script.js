const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.querySelector('.form-box.login form'); // Select the login form
const registerForm = document.querySelector(".form-box.register form");


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    wrapper.classList.remove('active-popup');

    const username = document.getElementById('register-usernameInput').value;
    const email = document.getElementById('register-emailInput').value;
    const password = document.getElementById('register-passwordInput').value;

    if (email.trim() !== '' && password.trim() !== '' && username.trim() !== '') {
        // Both email and password inputs have values
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Username:',username)
    } else {
        // At least one of the inputs is empty
        console.log('Please fill in all email , username and password fields.');
    }

    const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
    });

    const result = await response.text();
    alert(result);
});

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    wrapper.classList.remove('active-popup');
    const email = document.getElementById('login-emailInput').value;
    const password = document.getElementById('login-passwordInput').value;

    if (email.trim() !== '' && password.trim() !== '') {
        // Both email and password inputs have values
        console.log('Email:', email);
        console.log('Password:', password);
    } else {
        // At least one of the inputs is empty
        console.log('Please fill in both email and password fields.');
    }

    const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

    const result = await response.text();
    console.log(result);
});