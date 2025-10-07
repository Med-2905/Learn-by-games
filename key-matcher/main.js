const circle = document.getElementById("circle");
const letterSpan =document.getElementById("letter");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let currentLetter = getRandomLetter(null);

letterSpan.textContent = currentLetter;

function getRandomLetter(previous) {
    let newLetter ;


    do{
        newLetter = letters[Math.floor(Math.random() * letters.length)];
    }while(newLetter === previous);
     return newLetter;
}

function flashColor(className){
    circle.classList.remove('correct' , 'incorrect');
    circle.classList.add(className);

    setTimeout(() => {
        circle.classList.remove(className);
    }, 500);
}

function handleKeyPress(key){
    key  = key.toLowerCase();
    if(!key.match(/^[a-z]$/)){
        flashColor('incorrect');
        return;
    }

    if(key === currentLetter.toLowerCase()){
        flashColor('correct');
        const newLetter = getRandomLetter(currentLetter);
        currentLetter = newLetter;
        letterSpan.textContent = newLetter;
    }else{
        flashColor('incorrect');
    }
} 


document.addEventListener('keydown' , (event) => {
    handleKeyPress(event.key);
});
