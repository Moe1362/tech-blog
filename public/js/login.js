// Handler function for equine login form submission
const techLoginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-tech-login').value.trim();
    const password = document.querySelector('#password-tech-login').value.trim();

    if (username && password) {
        // Below I am sending a POST request to the login endpoint with the input values as JSON data
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            // If the request was unsuccessful, show an alert
            alert('Failed to log in.');
        }
    }
};

//Below is the event listner for the equine login form
const techLoginForm = document.querySelector('.tech-login-form');
if (techLoginForm) {
    techLoginForm.addEventListener('submit', techLoginFormHandler);
}