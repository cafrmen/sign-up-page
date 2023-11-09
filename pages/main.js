const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const text = document.querySelector('.show');
const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        text.innerHTML = '* Passwords do not match';
        password.value = '';
        confirmPassword.value = '';
    }
});