const questions = [
  {
    question:
      "Recently, where was the third United Nations conference on Afghanistan held?",
    answer: [
      { text: "Doha, Qatar", correct: true },
      { text: "Astana, Kazakhstan", correct: false },
      { text: "New Delhi, India", correct: false },
      { text: "Bishkek, Kyrgyzstan", correct: false },
    ],
  },
  {
    question:
      "Recently, where was the first International Conference On Steel Slag Road held?",
    answer: [
      { text: "Bhopal", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Chennai", correct: false },
      { text: "Hyderabad", correct: false },
    ],
  },
  {
    question: "Recently, where was the NATO Summit 2024 held?",
    answer: [
      { text: "Washington D.C.", correct: true },
      { text: "London", correct: false },
      { text: "Paris", correct: false },
      { text: "Geneva", correct: false },
    ],
  },
  {
    question:
      "India will host the first World Audio Visual and Entertainment Summit (WAVES) in which state from November 20-24, 2024?",
    answer: [
      { text: "Kerala", correct: false },
      { text: "Maharashtra", correct: false },
      { text: "Gujarat", correct: false },
      { text: "Goa", correct: true },
    ],
  },
  {
    question:
      "Recently, where was the 14th East Asia Summit Foreign Ministers’ Meeting (EAS FMM) held?",
    answer: [
      { text: "Beijing, China", correct: false },
      { text: "Vientiane, Lao PDR", correct: true },
      { text: "New Delhi, India", correct: false },
      { text: "Jakarta, Indonesia", correct: false },
    ],
  },
  {
    question: "Recently, where was the ’52nd Conference of Governors’ held?",
    answer: [
      { text: "Hyderabad", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Chennai", correct: false },
      { text: "Bengaluru", correct: false },
    ],
  },
  {
    question: "Recently, where was the ‘India-EU Regional Conference’ held?",
    answer: [
      { text: "Hyderabad", correct: false },
      { text: "Chennai", correct: false },
      { text: "Bengaluru", correct: false },
      { text: "New Delhi", correct: true },
    ],
  },
  {
    question:
      "Recently, where was the first ‘India-Gulf Cooperation Council (GCC) Foreign Ministers’ Meeting’ held?",
    answer: [
      { text: "Abu Dhabi", correct: false },
      { text: "Doha", correct: false },
      { text: "Manama", correct: false },
      { text: "Riyadh", correct: true },
    ],
  },
  {
    question:
      "Recently, where was the “2nd Asia-Pacific Ministerial Conference on Civil Aviation” held?",
    answer: [
      { text: "Kathmandu", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: false },
    ],
  },
  {
    question:
      "Recently, where was the “Responsible Use of Artificial Intelligence in the Military Domain (REAIM)” summit started?",
    answer: [
      { text: "Paris", correct: false },
      { text: "Seoul", correct: true },
      { text: "New Delhi", correct: false },
      { text: "London", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.querySelector("#answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML =
    "Q" + questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
