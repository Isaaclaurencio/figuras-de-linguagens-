// Mostra a seção correspondente ao botão clicado
const selectedInfo = document.getElementById(id);
if (selectedInfo) {
    selectedInfo.style.display = 'block';
}

// Adiciona uma classe ativa ao botão clicado
const buttons = document.querySelectorAll('nav button');
buttons.forEach(btn => {
    btn.classList.remove('active');
});
button.classList.add('active');