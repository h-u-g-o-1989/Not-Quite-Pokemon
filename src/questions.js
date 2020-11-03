class Encounter {
  //adding the new parameter question so we can pass in the questions object
  constructor(x, y, question, answer) {
    this.x = x;
    this.y = y;
    this.question = question;
    this.answer = answer;
  }
  //   onceFound() {
  //     console.log("THIS IS WHERE I WANT THE ENCOUNTER TO F@#& OFF!!!");
  //     this.x = -100;
  //     this.y = -100;
  // }
  draw() {
    rect(this.x * 75, this.y * 75, CELL_SIZE, CELL_SIZE); // multiply the x and y by 75 to convert it to our coordinates on the grid
  }
  //cant find a way to delete the encounters so
  //want a function that moves encounters off the map once they have been found, so it "clears" the map
}
/* i want to create a new variable that will store the questions for each encounter, these will be stored in an array so we can iterate through them
now the encounter will take three parameters, the x the y and the question, so in the 
new variable we can create any number of new encounters and change the question in each of them
so each new encounter will basically be a new question*/

/* if NEXT CODE DOESNT WORK ctrl Z until here*/
/*add another element to each encounter object, this way we can predetermine the correct answer
as a b c or d and then we in the function where we check if the answer is the same as the one we defined 
we can pass that function into the onclick, there we can can set the parameters as 
the encounter answer, and individually set buttonA's second parameter to "A" and bs to "B" etc
so that they match with the correctAnswer string, that way if the string from the button is the same
as the string from the encounter object then they got the answer right else they got it wrong.*/

let theQuestions = [
  new Encounter(8, 5, {
    found: "youve found the first question",
    question: "this is question 1?",
    answerA: "Hyper Text Markup Langauge",
    answerB: "Hyper type mess linguistics",
    answerC: "How to make linguini",
    answerD: "Have time make later",
    correctAnswer: "A",
  }),
  new Encounter(3, 5, {
    found: "youve found the second question",
    question: "this is question 2?",
    answerA: "ANSWER ONE",
    answerB: "ANSWER TWO",
    answerC: "ANSWER 3",
    answerD: "ANSWER 4",
    correctAnswer: "B",
  }),
];

/* now i could create a second class in which the questions can be passed into, this now needs to be initialised on 
the game page, so i change this.encounter to = the collectables class and pass in the parameter theQuestions
then we need to loop through the array of questions so we can draw each one of them, this should work??!!?*/

class Collectables {
  constructor(theQuestions) {
    this.score = 0;
    this.lives = 1;
    this.numberOfQuestions = 2;
    this.fence = document.getElementById("fence");
    this.scoreCount = document.getElementById("theScore");
    this.livesLeft = document.getElementById("livesLeft");
    this.textWindow = document.getElementById("text-window");
    this.gameLost = document.getElementById("lost");
    this.found = document.getElementById("found");
    this.question = document.getElementById("question");
    this.answerA = document.getElementById("answerA");
    this.answerB = document.getElementById("answerB");
    this.answerC = document.getElementById("answerC");
    this.answerD = document.getElementById("answerD");
    this.buttonA = document.getElementById("buttonA");
    this.buttonB = document.getElementById("buttonB");
    this.buttonC = document.getElementById("buttonC");
    this.buttonD = document.getElementById("buttonD");
    this.restartButton = document.getElementById("restartButton");
    this.arrayOfQuestions = theQuestions;
  }
  draw() {
    for (let i = 0; i < this.arrayOfQuestions.length; i++) {
      this.arrayOfQuestions[i].draw();
    }
  }

  /* now that the constructor of the collectables has the elements by Id I need a function that will "open" the 
  text window and change the inner HTML to the current ecnounter! should just be able to reset this.question.innerHtml 
  to = the encounter.question.found, if this works then just repeat for all the answers etc, can make the window
  "open" by changing the display from none in the css to flex, use the .style.display and set it = "flex", same way i changed the 
  pictures opacity when practicing, this function will then get called where the console log is declaring i have found a collectable,
  */
  openTextWindow(encounter) {
    this.window = true;
    this.found.innerHTML = encounter.question.found;
    this.question.innerHTML = encounter.question.question;
    this.answerA.innerHTML = encounter.question.answerA;
    this.answerB.innerHTML = encounter.question.answerB;
    this.answerC.innerHTML = encounter.question.answerC;
    this.answerD.innerHTML = encounter.question.answerD;
    this.textWindow.style.display = "flex";
    noLoop();

    buttonA.onclick = () => {
      this.checkForCorrectAnswer(encounter, "A");
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    buttonB.onclick = () => {
      this.checkForCorrectAnswer(encounter, "B");
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    buttonC.onclick = () => {
      this.checkForCorrectAnswer(encounter, "C");
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    buttonD.onclick = () => {
      this.checkForCorrectAnswer(encounter, "D");
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    /*want to call no loop here and then once button has been clicked 
    we want to call loop, this is so player stops when text window is open
    and then can move again once the text window has closed*/
  }

  /* write a new function that checks if the answer is the correct one, 
  takes those two parameters, then answer===correctanswer then score++ else life--
  will need to set those to this.life and this.score, then set second version of each
  to grab the html elements, then set the html to be equivilant of this.score and this.lives*/
  checkForCorrectAnswer(encounter, answer) {
    if (answer === encounter.question.correctAnswer) {
      this.numberOfQuestions--;
      this.score++;
      this.scoreCount.innerHTML = this.score;
    } else {
      //   for (let i = 0; i < this.arrayOfQuestions.length; i++) {
      //     this.arrayOfQuestions.splice(1);
      //   }
      this.numberOfQuestions--;
      this.lives--;
      this.livesLeft.innerHTML = this.lives;
    }
    let thisQuestionIndex = this.arrayOfQuestions.indexOf(encounter);
    this.arrayOfQuestions.splice(thisQuestionIndex, 1);
    console.log(thisQuestionIndex);
    /* way to open the bottom sqaures of path once all the encounters have been found 
    then when player walks off screen the next level loads, or could re writes size of 
    canvas, have this level on top half and then bottom half would be next level, would have to be 
    900px wide and 1800px tall, so would then have to change grid so its width is by 12 but height is by
    24 so we can keep the cell sizes the same.*/
    if (this.numberOfQuestions === 0) {
      this.fence.style.display = "none";
      game.player.deadZones = [
        { x: 4, y: 1 },
        { x: 5, y: 1 },
        { x: 6, y: 1 },
        { x: 7, y: 1 },
        { x: 3, y: 2 },
        { x: 4, y: 2 },
        { x: 5, y: 2 },
        { x: 6, y: 2 },
        { x: 7, y: 2 },
        { x: 2, y: 4 },
        { x: 8, y: 8 },
        { x: 1, y: 11 },
        { x: 2, y: 11 },
        { x: 3, y: 11 },
        { x: 4, y: 11 },
        { x: 7, y: 11 },
        { x: 8, y: 11 },
        { x: 9, y: 11 },
        { x: 10, y: 11 },
      ];
    }
    if (this.lives === 0) {
      this.gameLost.style.display = "flex";
    }
    //this is not working correctly and will need to be fixed tomorrow!
    this.restartButton.onclick = () => {
      game.initialiseGame();
      this.gameLost.style.display = "none";
    };
  }
  /* next thing is to write the html questions and answers with buttons, then need to use the document.getElementById to 
make the text window appear when we step on one of the collectables, we also then need to change the innerHTML to the relevant encounter*/
}
