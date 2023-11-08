const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const text = document.querySelector('.hidden');
const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        text.classList.add('show');
    }
});