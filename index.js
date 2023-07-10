
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function(){
        var htmlContent = this.innerHTML ;
        makeSound(htmlContent);
        addAnimationToButton(htmlContent);
    })    
}
document.addEventListener("keypress", function(event){

    makeSound(event.key);
    addAnimationToButton(event.key);
})
function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;
        case "a":
            var kick_bass = new Audio('kick-bass.mp3');
            kick_bass.play();
            break;
        case "s":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio('tom-1.mp3');
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio('tom-2.mp3');
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio('tom-3.mp3');
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio('tom-4.mp3');
            tom_4.play();
            break;
    
        default:
            console.log(htmlContent)
            break;
    }
}
function addAnimationToButton(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+currentKey).classList.remove("pressed");
        
    }, 100);   
}