// Function to handle user login
function loginUser() {
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simple validation
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // Check if the user credentials are correct
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        // Redirect or show logged-in state (for example purposes, we'll just alert)
        // window.location.href = '/dashboard'; // Example of redirect
    } else {
        alert('Invalid username or password.');
    }
}

document.getElementById('loginButton').addEventListener('click', loginUser);