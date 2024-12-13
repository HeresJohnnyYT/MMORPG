// Register User
document.getElementById('register').addEventListener('click', () => {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Error: ' + error.message;
    });
});

// Login User
document.getElementById('login').addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Error: ' + error.message;
    });
});

// Combat between Users
document.getElementById('combat').addEventListener('click', () => {
    const user1 = document.getElementById('user1').value;
    const user2 = document.getElementById('user2').value;

    fetch('/combat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user1, user2 })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Error: ' + error.message;
    });
});
