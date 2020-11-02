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
    questionTitle: "What does HTML stand for?",
    answerA: "Hyper Text Markup Langauge",
    answerB: "Hyper type mess linguisitics",
    answerC: "How to make linguini",
    answerD: "Have time make later",
  }),
  new Encounter(3, 5, {
    questionTitle: "What does HTML stand for?",
    answerA: "Hyper Text Markup Langauge",
    answerB: "Hyper type mess linguisitics",
    answerC: "How to make linguini",
    answerD: "Have time make later",
  }),
];
/* now i could create a second class in which the questions can be passed into, this now needs to be initialised on 
the game page, so i change this.encounter to = the collectables class and pass in the parameter theQuestions
then we need to loop through the array of questions so we can draw each one of them, this should work??!!?*/

class Collectables {
  constructor(theQuestions) {
    this.arrayOfQuestions = theQuestions;
  }
  draw() {
    for (let i = 0; i < this.arrayOfQuestions.length; i++) {
      this.arrayOfQuestions[i].draw();
    }
  }
}

/* next thing is to write the html questions and answers with buttons, then need to use the document.getElementById to 
make the text window appear when we step on one of the collectables, we also then need to change the innerHTML to the relevant encounter*/
