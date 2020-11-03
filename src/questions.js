class Encounter {
  //adding the new parameter question so we can pass in the questions object
  constructor(x, y, question) {
    this.x = x;
    this.y = y;
    this.question = question;
  }
  draw() {
    rect(this.x * 75, this.y * 75, CELL_SIZE, CELL_SIZE); // multiply the x and y by 75 to convert it to our coordinates on the grid
  }
}
/* i want to create a new variable that will store the questions for each encounter, these will be stored in an array so we can iterate through them
now the encounter will take three parameters, the x the y and the question, so in the 
new variable we can create any number of new encounters and change the question in each of them
so each new encounter will basically be a new question*/

/* if NEXT CODE DOESNT WORK ctrl Z until here*/

let theQuestions = [
  new Encounter(8, 5, {
    found: "youve found the first question",
    question: "this is question 1?",
    answerA: "Hyper Text Markup Langauge",
    answerB: "Hyper type mess linguistics",
    answerC: "How to make linguini",
    answerD: "Have time make later",
  }),
  new Encounter(3, 5, {
    found: "youve found the second question",
    question: "this is question 2?",
    answerA: "ANSWER ONE",
    answerB: "ANSWER TWO",
    answerC: "ANSWER 3",
    answerD: "ANSWER 4",
  }),
];
/* now i could create a second class in which the questions can be passed into, this now needs to be initialised on 
the game page, so i change this.encounter to = the collectables class and pass in the parameter theQuestions
then we need to loop through the array of questions so we can draw each one of them, this should work??!!?*/

class Collectables {
  constructor(theQuestions) {
    this.textWindow = document.getElementById("text-window");
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
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    buttonB.onclick = () => {
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    buttonC.onclick = () => {
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    buttonD.onclick = () => {
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    /*want to call no loop here and then once button has been clicked 
    we want to call loop, this is so player stops when text window is open
    and then can move again once the text window has closed*/
  }

  /* next thing is to write the html questions and answers with buttons, then need to use the document.getElementById to 
make the text window appear when we step on one of the collectables, we also then need to change the innerHTML to the relevant encounter*/
}
/*now all buttons are responsive and the player can not move while the text window is open, 
the text in the window now linked to each encounter.

the next thing is to be able to determine if the player chooses the correct answer, 
could compare the returned string with expected string, if matching then point if not then return. 
or could set the answer to the button and number the buttons, so in each encounters object we add 
and answer = 2 and then make button a = 0 , b = 1, c = 2 , d = 4 and then we just have to see if that 
button was pressed was === to answer in the object*/
