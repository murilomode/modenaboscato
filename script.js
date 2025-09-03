document.getElementById('magic-button').addEventListener('click', function() {
    document.getElementById('status-message').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('status-message').classList.add('hidden');
        document.getElementById('final-message').classList.remove('hidden');
    }, 3000); // Espera 3 segundos antes de exibir a mensagem final
});
