var vidas = 3;

function Cara() {
    var resultado = Math.floor(Math.random() * 2) + 1;
    if (resultado === 1) {
        document.querySelector("h1").innerText = "Cara! Você ganhou!";
        vidas++
    } else {
        document.querySelector("h1").innerText = "Coroa! Você perdeu!";
        vidas--;
    }
    atualizarVidas();
}

function Coroa() {
    var resultado = Math.floor(Math.random() * 2) + 1;
    if (resultado === 1) {
        document.querySelector("h1").innerText = "Coroa! Você ganhou!";
        vidas++
    } else {
        document.querySelector("h1").innerText = "Cara! Você perdeu!";
        vidas--;
    }
    atualizarVidas();
}

/// Funções de vida

function atualizarVidas() {
    // Atualiza o texto dentro do elemento com id "vidas", adicionando o emoji de coração vermelho
    document.getElementById("vidas").innerHTML = "Vidas restantes: " + vidas + ' <span style="color: red;">&#10084;</span>';
    ;
    if (vidas <= 0) {
        // Oculta os botões "Cara" e "Coroa"
        document.getElementById("Cara").style.display = "none";
        document.getElementById("Coroa").style.display = "none";
        // Exibe a mensagem de vidas acabaram
        var mensagem = document.createElement("p");
        mensagem.innerText = "Suas vidas acabaram.";
        document.body.appendChild(mensagem);
        // Cria o botão "Jogar novamente"
        criarBotaoReiniciar();
    }
}

function criarBotaoReiniciar() {
    // Verifica se o botão já foi criado para evitar duplicações
    if (!document.getElementById("restartButton")) {
        // Criando botão para reiniciar o jogo
        var restartButton = document.createElement("button");
        restartButton.id = "restartButton";
        restartButton.className = "restartButton";
        restartButton.innerText = "Jogar novamente";
        restartButton.onclick = function() {
            reiniciarJogo();
        };
        // Adiciona o botão dentro do contêiner
        var container = document.createElement("div");
        container.appendChild(restartButton);
        document.body.appendChild(container);
    }
}

function reiniciarJogo() {
    vidas = 3;
    atualizarVidas();
    document.querySelector("h1").innerText = "Escolha cara ou coroa";
    removerBotaoReiniciar();
    // Exibir botões "Cara" e "Coroa" novamente
    document.getElementById("Cara").style.display = "inline-block";
    document.getElementById("Coroa").style.display = "inline-block";
    // Remove a mensagem de vidas acabaram, se existir
    var mensagem = document.querySelector("p");
    if (mensagem) {
        mensagem.parentNode.removeChild(mensagem);
    }
}

function removerBotaoReiniciar() {
    var restartButton = document.getElementById("restartButton");
    if (restartButton) {
        restartButton.parentNode.removeChild(restartButton);
    }
}
