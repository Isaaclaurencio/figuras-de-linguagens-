function showInfo(id, button) {
    // Esconde todas as informações
    const infos = document.querySelectorAll('.info');
    infos.forEach(info => {
        info.style.display = 'none';
    });

    // Remove a classe 'selected' de todos os botões
    const buttons = document.querySelectorAll('nav ul li button');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Mostra a informação correspondente e marca o botão como selecionado
    const infoToShow = document.getElementById(id);
    if (infoToShow) {
        infoToShow.style.display = 'block';
    }
    button.classList.add('selected');
}