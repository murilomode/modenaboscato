document.getElementById('magic-button').addEventListener('click', function() {
    // Esconde o botão após o clique
    document.getElementById('magic-button').style.display = 'none';
    
    // Exibe a mensagem de progresso
    document.getElementById('status-message').classList.remove('hidden');

    // Gerar um número aleatório entre 0 e 1 e verificar se é menor que 0.5
    const randomChance = Math.random();

    if (randomChance < 0.5) {
        // Caso seja menor que 0.5, aparece a mensagem de erro e a tela fica vermelha
        document.body.style.backgroundColor = "red"; // Altera o fundo para vermelho
        document.getElementById('final-message').innerHTML = "Oh oh, I'm sorry, we can't make things OK right now";
        document.getElementById('final-message').style.color = "#fff"; // Muda a cor do texto para branco
    } else {
        // Caso contrário, exibe a mensagem de sucesso
        let loadingBar = document.getElementById('loading-bar');
        let width = 0;

        // Atualiza a barra de carregamento
        let interval = setInterval(function() {
            width += 10;
            loadingBar.style.width = width + '%';

            if (width >= 100) {
                clearInterval(interval); // Interrompe o loop quando a barra atingir 100%
            }
        }, 300); // Atualiza a cada 300ms

        // Após 3 segundos, exibe a mensagem final e esconde a de progresso
        setTimeout(function() {
            document.getElementById('status-message').classList.add('hidden');
            document.getElementById('final-message').classList.remove('hidden');
        }, 3000);
    }
});
