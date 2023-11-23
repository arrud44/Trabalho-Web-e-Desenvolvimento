function fazerLogin() {
    var campos = ['username', 'password'];
    var errorBox = document.getElementById('errorBox');
    var camposVazios = [];

    for (var i = 0; i < campos.length; i++) {
        var campoValor = document.getElementById(campos[i]).value;

        if (campoValor === '') {
            camposVazios.push(campos[i]);
        }
    }

    if (camposVazios.length > 0) {
        errorBox.innerText = 'Por favor, preencha os seguintes campos: ' + camposVazios.join(', ');
        errorBox.style.display = 'block'; 
    } else {
        errorBox.innerText = '';
        errorBox.style.display = 'none'; 

        window.location.href = 'sobrenos.html';
    }
}