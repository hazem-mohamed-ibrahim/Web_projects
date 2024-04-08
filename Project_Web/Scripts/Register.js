var loginForm = document.querySelector('.login_form');
var signInForm = document.querySelector('.Signin_form');

function showLoginForm() {
    loginForm.style.display = 'block';
    signInForm.style.display = 'none';
}

function showSignInForm() {
    loginForm.style.display = 'none';
    signInForm.style.display = 'block';
}

document.getElementById('loginLink').addEventListener('click', showLoginForm);
document.getElementById('signInLink').addEventListener('click', showSignInForm);

