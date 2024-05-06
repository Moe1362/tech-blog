//This is the signup request
const techSignupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        // When successful, load the homepage
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.'); // When unsuccessful, show alert
        }
    }
};

//Added event listners
const techSignupForm = document.querySelector('#signup-form');
if (techSignupForm) {
    techSignupForm.addEventListener('submit', techSignupFormHandler);
}





