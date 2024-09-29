var timeBegan = null;       // Verifica se o contador começou
var timeStopped = null;     // Verifica que horário o contador parou
var stoppedDuration = 0;    // Verifica o horário que o contador parou
var startInterval = null;   // É necessário para parar o método "StartInterval"
var flag = false;           // Controla o "Começa e Para" do contador

const timerContainer = document.getElementsByClassName("startButton")[0];
const stopContainer = document.getElementsByClassName("resetButton")[0];

timerContainer.addEventListener("click", function() {
    if(!flag) {
        startTimer();
        flag = true;
    }
    else {
        stopTimer();
        flag = false;
    }
})


function startTimer() {
    if(timeBegan === null) 
        timeBegan = new Date();
    
    if(timeStopped !== null)
        stoppedDuration += (new Date() - timeStopped);
    
    startInterval = setInterval(clockRunning, 10);
    
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning() {
    var currentTime = new Date();
    var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);
    
    var minutes = timeElapsed.getUTCMinutes();
    var seconds = timeElapsed.getUTCSeconds();
    var milliseconds = timeElapsed.getUTCMilliseconds();
    
    milliseconds = Math.floor(milliseconds/10);
    
    document.getElementById("timer-display").innerHTML = 
    (minutes = minutes < 10 ? '0' + minutes:minutes) + ":"+
    (seconds = seconds < 10 ? '0' + seconds:seconds) + ":"+
    (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}



stopContainer.addEventListener("click", function() {            // Evento para resetar o cronômetro
    resetTimer();
})

function resetTimer() {     // função que reseta o cronômetro
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    document.getElementById("timer-display").innerHTML = "00:00:00";
    flag = false;
}


// FUNÇÃO QUE QUANDO O ÍCONE DE PLAY É CLICADO ELE BUSCA O BOTÃO COM ID "toggleIcon" E ADICIONA UM EVENTO
// QUE EXECUTA A FUNÇÃO SE O ICONE FOR "FA-PLAY" ELE REMOVE E ADICIONA O "FA-PAUSE", E VICE-VERSA

document.getElementById("toggleIcon").addEventListener("click",function() {
    const icon = this.querySelector("i");

    if (icon.classList.contains("fa-play")) {
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    }
    else {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
})