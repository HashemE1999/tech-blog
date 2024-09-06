// Function to handle user registration
function registerUser() {
    const usernameInput = document.getElementById('registerUsername');
    const passwordInput = document.getElementById('registerPassword');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simple validation
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // Check if the user already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        alert('Username already exists.');
        return;
    }

    // Register the new user
    users.push({ username, password });
    usernameInput.value = '';
    passwordInput.value = '';
    alert('Registration successful!');
}

document.getElementById('registerButton').addEventListener('click', registerUser);