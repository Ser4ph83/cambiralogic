let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    console.log(numeroSecreto);

function jogo() {
    
    let palpite = document.getElementById("batata").value;

    if (numeroSecreto == palpite) {
        document.getElementById("morango").innerText = "Parabens, acertou!";
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
        console.log(numeroSecreto);
    } else {
        document.getElementById("morango").innerText = "Errou, tente novamente";
    }

} 
