document.addEventListener('DOMContentLoaded', function() {
    var emailElement = document.querySelector('.copy-email');
    var copyButton = document.getElementById('copy-button');

    emailElement.addEventListener('click', copyEmail);
    copyButton.addEventListener('click', copyEmail);

    function copyEmail() {
        var emailAddress = 'lais_thauanne@outlook.com';

        // Cria um elemento de input temporário
        var tempInput = document.createElement('input');
        tempInput.setAttribute('value', emailAddress);
        document.body.appendChild(tempInput);

        // Copia o valor do input para a área de transferência
        tempInput.select();
        document.execCommand('copy');

        // Remove o elemento de input temporário
        document.body.removeChild(tempInput);

        // Altera o texto do botão após a cópia
    var copyButton = document.getElementById('copy-button');
    copyButton.innerHTML = 'Email copied!';}
});
