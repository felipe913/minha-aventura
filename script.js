let gameText = document.getElementById("gameText");
let choices = document.getElementById("choices");
let gameImage = document.getElementById("gameImage");
let restartButton = document.getElementById("restart");

function startGame() {
    restartButton.style.display = "none";
    showImage("imagens/inicio.jpg");
    showText("Em um vilarejo distante, você ouve uma lenda sobre uma espada lendária que pode trazer paz ao reino. O sábio local conta que a espada está escondida em um castelo sombrio, guardado por criaturas místicas.");
    showChoices([
        { text: "Ir direto para o castelo", action: caminhoCastelo },
        { text: "Procurar um mapa no vilarejo", action: procurarMapa }
    ]);
}

function showText(text) {
    gameText.innerHTML = `<p>${text}</p>`;
}

function showChoices(options) {
    choices.innerHTML = "";
    options.forEach(option => {
        let button = document.createElement("button");
        button.className = "choice-btn";
        button.textContent = option.text;
        button.onclick = option.action;
        choices.appendChild(button);
    });
}

function showImage(src) {
    gameImage.src = src;
}

function caminhoCastelo() {
    showImage("imagens/castelo.jpg");
    showText("Você segue em direção ao castelo, mas logo avista uma criatura feroz guardando a entrada.");
    showChoices([
        { text: "Enfrentar a criatura em batalha", action: lutarCriatura },
        { text: "Procurar uma entrada alternativa", action: caminhoAlternativo }
    ]);
}

function procurarMapa() {
    showImage("imagens/mercador.jpg");
    showText("No vilarejo, um mercador misterioso oferece um mapa antigo por um preço alto. Ele diz que o mapa mostra uma entrada secreta para o castelo.");
    showChoices([
        { text: "Comprar o mapa", action: comprarMapa },
        { text: "Recusar a oferta e ir sozinho", action: recusarMapa }
    ]);
}

function lutarCriatura() {
    showImage("imagens/vitoria.jpg");
    showText("Após uma batalha intensa, você derrota a criatura e entra no castelo. Lá, você encontra a espada lendária, e o reino está salvo graças à sua coragem!");
    endGame("Vitória");
}

function caminhoAlternativo() {
    showImage("imagens/armadilha.jpg");
    showText("Você encontra uma passagem secreta, mas é uma armadilha! Você fica preso no castelo para sempre, condenado ao esquecimento.");
    endGame("Derrota");
}

function comprarMapa() {
    showImage("imagens/entrada-secreta.jpg");
    showText("O mapa leva você a uma entrada secreta. Você adentra o castelo e encontra a espada lendária, tornando-se o herói do reino!");
    endGame("Vitória");
}

function recusarMapa() {
    showImage("imagens/floresta.jpg");
    showText("Sem o mapa, você se perde na floresta e nunca encontra o castelo. Sua jornada termina sem sucesso, e o reino permanece em perigo.");
    endGame("Derrota");
}

function endGame(result) {
    showText(`Fim do jogo: ${result}`);
    choices.innerHTML = "";
    restartButton.style.display = "block";
}

// Inicia o jogo
startGame();
