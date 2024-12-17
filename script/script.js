const worldDisplay = document.querySelector(".word-display");
const buttons = document.querySelectorAll('.clavier-B');
const letter = document.querySelectorAll(".letter");
let dispalScoor = document.getElementById("scoor");
let displayIncorrectScoor = document.getElementById("incorrectScoor");
const gameOver = document.getElementsByClassName("game_over");
const faceDisply = document.getElementsByClassName("faceDisply");
const displayBody = document.getElementsByClassName("bodyy");
const displayHand1 = document.getElementsByClassName("hand1");
const displayHand2 = document.getElementsByClassName("hand2");
const displayfoot1 = document.getElementsByClassName("foot1");
const displayfoot2 = document.getElementsByClassName("foot2");
const playAgain = document.getElementById("playAgain");
const iscorrectWord = document.getElementById("correctWord");
const clickedbtn = document.getElementsByClassName("clicked");
let displaymaxGuesses = document.getElementsByClassName("maxGuesses");
displaymaxGuesses.textContent = ""
let scoor = 0 ;
let maxGuesses;
let currentDifficulty = 'medium'; 

const setDifficulty = function(difficulty) {
    currentDifficulty = difficulty;
    
    if (difficulty === 'easy') {
        maxGuesses = 9;
        displaymaxGuesses[0].textContent = maxGuesses;
    } else if (difficulty === 'medium') {
        maxGuesses = 6;
        displaymaxGuesses[0].textContent = maxGuesses;
    } else if (difficulty === 'hard') {
        maxGuesses = 3;
        displaymaxGuesses[0].textContent = maxGuesses;
    } else {
        maxGuesses = 6; 
        displaymaxGuesses [0].textContent = maxGuesses;
    }  

    
     let incorrectScoor = 0;
    displayIncorrectScoor.innerHTML = incorrectScoor;
    
    getword();
}

const getword = function(){
    const {word , hint} = wordList[Math.floor(Math.random()*wordList.length)];
    correctWord = word;
    console.log(word );
    console.log( hint);
    document.querySelector(".hint").innerHTML = hint ;
    worldDisplay.innerHTML = word.split("").map(() => `<span class="letter"></span>` ).join("");
}
const checkIfWordComplete = function() {
    const displayedWord = Array.from(worldDisplay.children).map(child => child.innerHTML).join('');
    if (displayedWord.toLowerCase() === correctWord.toLowerCase()) {
        wordGuessed = true;
        console.log("word is valid");  
        scoor++;
        dispalScoor.innerHTML = scoor;
        getword();
        buttons.forEach(button => {
        clickedbtn[0].classList.remove("clicked");
        })
        
        
        
    }
};

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            button.clicked = true;
            let content = button.innerHTML.toLowerCase();
            console.log(content); 
            if(correctWord.toLowerCase().includes(content)){
                console.log("hello rah kayna ");
                
                for(let i = 0 ; i< correctWord.length ; i++){
                    
                    if(correctWord[i].toLowerCase() === content){
                        worldDisplay.children[i].innerHTML = content.toUpperCase();
                      

                    
                }
            }
            checkIfWordComplete();
               
            } else{
                incorrectScoor++;
                displayIncorrectScoor.innerHTML = incorrectScoor;
                
                // Calculate progress percentage for body parts
                const progressPercentage = (incorrectScoor / maxGuesses) * 6;
                
                if(progressPercentage >= 1) faceDisply[0].style.display = "block";
                if(progressPercentage >= 2) displayBody[0].style.display = "block";
                if(progressPercentage >= 3) displayHand1[0].style.display = "block";
                if(progressPercentage >= 4) displayHand2[0].style.display = "block";
                if(progressPercentage >= 5) displayfoot1[0].style.display = "block";
                
                if(incorrectScoor >= maxGuesses) {
                    displayfoot2[0].style.display = "block";
                    gameOver[0].style.display = "block";
                    iscorrectWord.innerHTML = correctWord;
                    
                    playAgain.addEventListener("click", function(){
                        window.location.reload();
                    });
                }
                console.log("not hello makayncah");
                

            }
            
        });
        });



getword();





























  // let scoor = 0;
                        // scoor += 1;
                        // dispalScoor.innerHTML = scoor;