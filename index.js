/* -------------------------------------------- Data ------------------------------------------ */
const DINO = [
	{
		question: 'What are Dinos with long necks called?',
		answers: [
			'Quadruped',
			'Sauropod',
			'Ornithopod',
			'Theropods'
		],
		correctAnsw:'Sauropod',
		icon: 'https://i.imgur.com/SDEOQBf.png',
		alt: 'brontosaur image'
	},
	{
		question: 'What is the largest carnivore land dinosaur?',
		answers: [
			'Giganotosaurus',
			'Trex',
			'Spinosaurus', 
			'Godzillasaurus'
		],
		correctAnsw:'Spinosaurus',
		icon: 'https://i.imgur.com/ZXsUJas.png0',
		alt: 'Spinosaurus image'

	},
	{
		question: 'When did the Stegosaurus live?',
		answers: [
			'Triassic', 
			'Cretaceous',
			'Jurassic',
			'Stegorassic'

		],
		correctAnsw:'Jurassic',
		icon: 'https://i.imgur.com/MK2s1G5.png',
		alt: 'Stegosaurus image'

	},
	{
		question: 'What does dinosaur mean in greek?',
		answers: [
			'Earth Shakers',
			'Terrible Lizard',
			'Sharpteeth',
			'Giant Walkers'
		],
		correctAnsw:'Terrible Lizard',
		icon: 'https://i.imgur.com/qiKMM0B.png',
		alt: 'Dancing Dino'

	},
	{
		question: 'What were meat eating Dinos known as?',
		answers: [
			'Carnivores',
			'Ominvores',
			'Theropods',
			'Raptors'
		],
		correctAnsw:'Theropods',
		icon: 'https://i.imgur.com/EFBILtg.png',
		alt: 'theropods'

	},
	{
		question: 'What is the smallest dinosaur ever found so far?',
		answers: [
			'Baby Mussaurus',
			'Compsognathus',
			'Micro Raptor',
			'Auilops'
		],
		correctAnsw:'Baby Mussaurus',
		icon: 'https://i.imgur.com/xZR0Ojg.png',
		alt: 'baby dinosaur'

	},
	{
		question: 'What is the tallest dinosaur?',
		answers: [
			'Brontosaurus',
			'Ultrasaurus',
			'Diplodocus',
			'Brachiosaurus'
		],
		correctAnsw:'Brachiosaurus',
		icon: 'https://i.imgur.com/SDEOQBf.png',
		alt: 'Brachiosaurus image'

	},
	{
		question: 'What is the largest flying reptile?',
		answers: [
			'Pteranodon',
			'Micro Raptor',
			'Archaeopteryx',
			'Quetzalcoatlus'
		],
		correctAnsw:'Quetzalcoatlus',
		icon: 'https://i.imgur.com/CpSy18Q.png',
		alt: 'flying dinosaur'

	},
	{
		question: 'How fast was the T Rex?',
		answers: [
			'10mph',
			'50mph',
			'20mph',
			'40mph'
		],
		correctAnsw:'20mph',
		icon: 'https://i.imgur.com/mJdoNd1.png1',
		alt: 'baby T Rex'

	},
	{
		question: 'What was the largest raptor discovered?',
		answers: [
			'Velociraptor',
			'Dakotaraptor',
			'Utahraptor',
			'Bambiraptor'
		],
		correctAnsw:'Utahraptor',
		icon: 'https://i.imgur.com/XIdOkzJ.png',
		alt: 'raptor image'

	}	
];

/* -------------------------------------------- Creating Functions ------------------------------------------ */

let questionNum = 0;
let score = 0;

/* create a function that will increment the question */
function nextQuestionCount() {
	questionNum ++;
	if (questionNum < DINO.length) {
	  	$('.js-questionNum').text(questionNum+1);
	}
}


// Create function that will create the box where question, answers, and submit

function createQuestion() {
	if (questionNum < DINO.length) {
		return `
			<div class="questionBox">
				<div>
				<h2>${DINO[questionNum].question}</h2>
				<form class="quiz form">
					<fieldset>
					<label class="answBox">
						<input type="radio" name="answer" value="${DINO[questionNum].answers[0]}" required> 
						<span>${DINO[questionNum].answers[0]}</span>
					</label>

					<label class="answBox">
	  					<input type="radio" name="answer" value="${DINO[questionNum].answers[1]}" required>
	  					<span>${DINO[questionNum].answers[1]}</span> 
	  				</label>

	  				<label class="answBox">
	  					<input type="radio" name="answer" value="${DINO[questionNum].answers[2]}" required>
	  					<span>${DINO[questionNum].answers[2]}</span> 
	  				</label>

	  				<label class="answBox">
	  					<input type="radio" name="answer" value="${DINO[questionNum].answers[3]}" required>
	  					<span>${DINO[questionNum].answers[3]}</span> 
	  				</label>

	 			 	<button type="submit" class="submitButton">Submit</button>
					</fieldset>
				</form> 
				</div>
			</div>`;			
	}
	else {
		resultsPage();
		restartQuiz();
	}
}

// create function that will start your quiz

function startQuiz() {
	$('.js-quizBox').on('click', '.js-startButton', function (event) {
		$('.js-quizBox').remove();
    $('.js-questionAnswerForm').css('display', 'block');
    $('.questionNum').text(1);
	});
}

//create function that will pull the createQuestion function to the questionAnswerForm div
function renderQuestion() {
  $('.js-questionAnswerForm').html(createQuestion());
}

// create function to guide what happens when user chooses answer

function userChoice() {
	$('form').on('submit', function (event) {
    	event.preventDefault();
    	let choice = $('input:checked');
    	let answer = choice.val();
    	let correctAnsw = `${DINO[questionNum].correctAnsw}`;
    	if (answer === correctAnsw) {
      		choice.parent().addClass('correct');
      		correctAnswer();
      		updateScore();
    	} 
    	else {
      		choice.parent().addClass('wrong');
      		wrongAnswer();
    	}
    });	
}

// create function that will update score
function updateScore() {
  score ++;
  $('.js-score').html(score);
}


// create function that will bring you to the correct slide

function correctAnswer() {
	let correctAnsw = `${DINO[questionNum].correctAnsw}`;
	 $('.js-questionAnswerForm').html(`<div class="correctFeedback">
	 		<div class="icon">
	 			<img src="${DINO[questionNum].icon}" alt="${DINO[questionNum].alt}"/>
	 		</div>
	 		<p><b>Correct!</b></p>
	 		<button type="button" class="nextButton">Next</button></div>`);
}

// create function that will bring you to the incorrect slide

function wrongAnswer() {
	let correctAnsw = `${DINO[questionNum].correctAnsw}`;
	$('.js-questionAnswerForm').html(`<div class="correctFeedback">
		<div class="icon">
			<img src="${DINO[questionNum].icon}" alt="${DINO[questionNum].alt}"/>
		</div>
		<p><b>Incorrect :(</b>
		<br>the correct answer is <span>"${correctAnsw}"</span>
		</p><button type="button" class="nextButton">Next</button></div>`);
}



// create function that brings user to results

function resultsPage() {
	if (score >= 8) {
    	$('.js-questionAnswerForm').html(`<div class="results correctFeedback">
    		<h3>Congratulations!</h3><img class="resultpic" src="https://media.giphy.com/media/mTrUbEjM1Agta/giphy.gif" alt="jump rope jumping dinosaur"/>
    		<p>You got ${score} / 10</p><p>You are truly a dino lover!</p>
    		<button type="button" class="restartButton">Restart Quiz</button></div>`);
	}
	else if (score < 8 && score >= 5) {
    	$('.js-questionAnswerForm').html(`<div class="results correctFeedback">
    		<h3>So Close!</h3><img class="resultpic" src="https://media.giphy.com/media/l0O9ymKQmrkdEeeEE/giphy.gif" alt="meteor just missed dinosaurs"/>
    		<p>You got ${score} / 10</p><p>You might want to watch more PBS or Nature channels!</p>
    		<button type="button" class="restartButton">Restart Quiz</button></div>`);
	}
	else {
    	$('.js-questionAnswerForm').html(`<div class="results correctFeedback">
    	<h3>You don't love dinos</h3>
    	<img class="resultpic" src="https://media.giphy.com/media/oKltgjUfQSen6/giphy.gif" alt="carnivore knocked down frome tricerotops"/>
    	<p>You got ${score} / 10</p><p>You should watch Jurassic Park. It will give you a peak into the world of dinosaurs</p>
    	<button type="button" class="restartButton">Restart Quiz</button></div>`);
	}
}



// create function that will tell what happens when user clicks on next question

function nextQuestion() {
	$('main').on('click', '.nextButton', function (event) {
		nextQuestionCount();
		renderQuestion();
		userChoice();		
	});
}

// create function to restart quiz

function restartQuiz() {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

// create function that will invoke this quiz

function createQuiz() {
  startQuiz();
  renderQuestion();
  userChoice();
  nextQuestion();
}

$(createQuiz);

