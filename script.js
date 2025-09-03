document.getElementById('magic-button').addEventListener('click', function() {
    // Esconde o botão após o clique
    document.getElementById('magic-button').style.display = 'none';
    
    // Exibe a mensagem de progresso
    document.getElementById('status-message').classList.remove('hidden');

    // Após 3 segundos, exibe a mensagem final e esconde a de progresso
    setTimeout(function() {
        document.getElementById('status-message').classList.add('hidden');
        document.getElementById('final-message').classList.remove('hidden');
    }, 3000);
});

