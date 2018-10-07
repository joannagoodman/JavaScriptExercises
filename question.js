<script>

function Question(question, answers, correct){
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);
  
  for (var i = 0; i < this.answers.length; i++){
    console.log(i + ': ' + this.answers[i]);
  }
}

Question.prototype.correctAnswer = function(ans) {
  if (ans === this.correct){
    console.log('Correct answer!');
  }
    else{
      console.log('Wrong answer, try again');
    }
}

var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                     ['Yes', 'No'], 0);
var q2 = new Question('Whats the name of this course\'s teacher?',
                     ['John', 'Michael', 'Jonas'], 1);
var q3 = new Question('What does best describe coding?',
                     ['Fun', 'Interesting', 'Boring'], 2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestions();

var answer = parseInt(prompt('Please select the correct answer.'));

questions[n].checkAnswer(answer);

</script>