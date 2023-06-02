function handleLogin(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // let home = document.querySelector('index.html')

    if(username === 'dandan86271@gmail.com' && password === 'dan86271')
    {
        window.location.href = 'index.html';
    } else {
        alert('Login failed');
    }
}

document.getElementById('loginForm').addEventListener('submit', handleLogin);
