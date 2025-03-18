document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const userImage = document.getElementById('user-image');

    // Credenciais válidas
    const validUsername = 'Regina';
    const validPassword = '3A';

    // Verifica se as credenciais estão corretas
    if (username === validUsername && password === validPassword) {
        // Redireciona para a página principal após o login bem-sucedido
        window.location.href = 'dashboard.html'; 
    } else {
        // Exibe mensagem de erro se as credenciais forem inválidas
        errorMessage.textContent = 'Usuário ou senha inválidos.';
        userImage.src = 'default-profile.png'; 
    }
});