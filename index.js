for (var i = 0; i < 7; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function(){
        handleClick(this.innerHTML);
        buttonClick(this.innerHTML);
    });
}

function audio_tone(tone) {
    var tone = new Audio('sounds/'+tone+'.mp3');
    tone.play();
}

function handleClick(option) {
    switch (option) {
        case 'w':
            audio_tone("tom-3");
            break;
        case 'a':
            audio_tone("tom-1");
            break;
        case 'd':
            audio_tone("tom-2");
            break;
        case 's':
            audio_tone("tom-4");
            break;
        case 'j':
            audio_tone("crash");
            break;
        case 'k':
            audio_tone("kick-bass");
            break;
        case 'l':
            audio_tone("snare");
            break;
        default: 
    }
}

document.addEventListener("keydown", function (g){
    handleClick(g.key);
    buttonClick(g.key);
});

function buttonClick(event){
    document.querySelector("."+event).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("."+event).classList.remove("pressed");
    }, 150);
}
