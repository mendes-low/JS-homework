// document.addEventListener("DOMContentLoaded", function () {
//     // Функция для проверки ответа
//     function checkAnswer() {
//         const checkboxes = document.querySelectorAll('.answers input[type="checkbox"]');
//         let allCorrect = true;

//         checkboxes.forEach(function (checkbox) {
//             const isChecked = checkbox.checked;
//             const isCorrect = checkbox.dataset.correct === 'true';
//             const parent = checkbox.closest('.quiz_card');

//             if (isChecked !== isCorrect) {
//                 allCorrect = false;
//                 parent.classList.add('incorrect');
//             } else {
//                 parent.classList.remove('incorrect');
//                 parent.classList.add('correct');
//             }
//         });
//     }

//     // Назначение события на кнопку "Check Answer"
//     const checkButtons = document.querySelectorAll('.check_button');
//     checkButtons.forEach(function (button) {
//         button.addEventListener('click', checkAnswer());
//     });

//     // Функция для проверки всех ответов
//     function checkAllAnswers() {
//         const cards = document.querySelectorAll('.quiz_card');
//         let allCorrect = true;

//         cards.forEach(function (card) {
//             if (!card.classList.contains('correct')) {
//                 allCorrect = false;
//                 card.classList.add('incorrect');
//             }
//         });

//         if (allCorrect) {
//             alert('All answers are correct!');
//         } else {
//             alert('Some answers are incorrect.');
//         }
//     }

//     // Назначение события на кнопку "Check all answers"
//     const allCheckButton = document.querySelector('.all_check_button');
//     allCheckButton.addEventListener('click', checkAllAnswers);
// });






{/* <div class="quiz_card"> 
    <div class="difficulty_container">Difficulty: <span class="difficulty"></span></div> 
    <div class="question_container">Question <span>1</span>: <span class="question"></span></div> 
    <div class="answer"> 
        <h4>Your answer:</h4> 
        <form class="answers" action=""> 
            <p> 
                <input type="checkbox" id="q1"> 
                    <label for="g1"></label> 
            </p> 
            <p> 
                <input type="checkbox" id="q2"> 
                    <label for="g2"></label> 
            </p> 
            <p> 
                <input type="checkbox" id="q3"> 
                    <label for="g3"></label> 
            </p> 
        </form> 
    </div>
    <button class="check_button">Check Answer</button> 
</div> */}



// function createQuizCard(cards) {
//     const quizCard = document.createElement('div');
//     quizCard.classList.add('quiz_card');

//     const difficultyContainer = document.createElement('div');
//     difficultyContainer.classList.add('difficulty_container');
//     const difficulty = document.createElement('span');
//     difficulty.classList.add('difficulty');
//     difficulty.textContent = cards.difficulty;
//     difficultyContainer.appendChild(difficulty);

//     const questionContainer = document.createElement('div');
//     questionContainer.classList.add('question_container');
//     const question = document.createElement('span');
//     question.classList.add('question');
//     question.textContent = cards.question
//     questionContainer.appendChild(question);

//     const answer = document.createElement('div');
//     answer.classList.add('answer');

//     const h4 = document.createElement('h4');
//     h4.textContent = 'Your answer:';
//     answer.appendChild(h4);

//     const form = document.createElement('form');
//     form.classList.add('answers');
//     answer.appendChild(form);

//     const answers = [...cards.incorrect_answers, cards.correct_answer];
//     answers.sort();
//     answers.forEach(answer => {
//         const answerInput = document.createElement('input');
//         answerInput.setAttribute('type', 'radio');
//         answerInput.setAttribute('value', answer);

//         const answerLabel = document.createElement('label');
//         answerLabel.textContent = answer;
//         const answerDiv = document.createElement('div');

//         answerDiv.appendChild(answerInput);
//         answerDiv.appendChild(answerLabel);
//         quizCard.appendChild(answerDiv);
//         quizContainer.appendChild(quizCard);
//     });

//     const checkButton = document.createElement('button');
//     checkButton.classList.add('check_button');

//     quizCard.appendChild(difficultyContainer);
//     quizCard.appendChild(questionContainer);
//     quizCard.appendChild(answer);

//     return quizCard;
// }

// const url = 'https://opentdb.com/api.php?amount=5&category=26';
// fetch(url)
//     .then(response => response.json())
//     .then(data => data.results)
//     .then(data => {
//         const quizContainer = document.querySelector('quiz_cards');
//         for (let i of data) {
//             quizContainer.appendChild(createQuizCard(i));
//         }
//         // data.forEach(item => quizContainer.appendChild(createQuizCard(item)));
//     })
//     .catch(error => console.error(error));

























































// fetch('https://opentdb.com/api.php?amount=10&category=26')
//     .then(response => response.json())
//     .then(data => {
//         const questions = data.results;
//         const quizContainer = document.querySelector('.quiz-container');

//         // Создание карточек для каждого вопроса
//         questions.forEach((question, index) => {
//             const card = document.createElement('div');
//             card.classList.add('card');

//             const questionText = document.createElement('p');
//             questionText.textContent = `${ index + 1 } ${ question.question }`;
//             card.appendChild(questionText);

//             // Создание вариантов ответов
//             const answers = [...question.incorrect_answers, question.correct_answer];
//             answers.sort(); // Перемешиваем ответы, чтобы правильный не всегда был последним
//             answers.forEach(answer => {
//                 const answerInput = document.createElement('input');
//                 answerInput.setAttribute('type', 'radio');
//                 answerInput.setAttribute('name', `question${index}`);
//                 answerInput.setAttribute('value', answer);
//                 const answerLabel = document.createElement('label');
//                 answerLabel.textContent = answer;
//                 const answerDiv = document.createElement('div');
//                 answerDiv.appendChild(answerInput);
//                 answerDiv.appendChild(answerLabel);
//                 card.appendChild(answerDiv);
//                 quizContainer.appendChild(card);
//             });

//         });

//         // Проверка ответов
//         const submitButton = document.createElement('button');
//         submitButton.textContent = 'Проверить ответы';
//         submitButton.addEventListener('click', () => {
//             const userAnswers = [];
//             questions.forEach((question, index) => {
//                 const selectedAnswer = document.querySelector(`input[name="${question} ${index}"]:checked`);
//                 if (selectedAnswer) {
//                     userAnswers.push(selectedAnswer.value);
//                 } else {
//                     userAnswers.push(null); // Если ответ не выбран
//                 }
//             });

//             const results = [];
//             userAnswers.forEach((answer, index) => {
//                 if (answer === questions[index].correct_answer) {
//                     results.push(true);
//                 } else {
//                     results.push(false);
//                 }
//             });

//             // Вывод результатов
//             console.log(results); // Здесь можно добавить логику для вывода результатов пользователю
//         });

//         quizContainer.appendChild(submitButton);
//     })
//     .catch(error => console.error(error))






































function createQuizCard(cardData) {
    const quizCard = document.createElement('div');
    quizCard.classList.add('quiz_card');

    const difficultyContainer = document.createElement('div');
    difficultyContainer.classList.add('difficulty_container');
    const difficulty = document.createElement('span');
    difficulty.classList.add('difficulty');
    difficulty.textContent = 'Difficulty: ' + cardData.difficulty;
    difficultyContainer.appendChild(difficulty);

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question_container');
    const question = document.createElement('span');
    question.classList.add('question');
    question.textContent = 'Question: ' + cardData.question;
    questionContainer.appendChild(question);
    
    const answer = document.createElement('div');
    answer.classList.add('answer');

    const h4 = document.createElement('h4');
    h4.textContent = 'Your answer:';
    answer.appendChild(h4);

    const form = document.createElement('form');
    form.classList.add('answers');

    const answers = [...cardData.incorrect_answers, cardData.correct_answer];
    answers.sort();
    answers.forEach(answerText => {
        const answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'radio');
        answerInput.setAttribute('name', cardData.question); 
        answerInput.setAttribute('value', answerText);

        const answerLabel = document.createElement('label');
        answerLabel.textContent = answerText;

        const answerDiv = document.createElement('div');
        answerDiv.appendChild(answerInput);
        answerDiv.appendChild(answerLabel);
        form.appendChild(answerDiv);
    });

    answer.appendChild(form);
    quizCard.appendChild(difficultyContainer);
    quizCard.appendChild(questionContainer);
    quizCard.appendChild(answer);

    quizCard.dataset.correctAnswer = cardData.correct_answer;

    return quizCard;
}

const url = 'https://opentdb.com/api.php?amount=10&category=26';
const quizContainer = document.querySelector('.quiz_cards');

fetch(url)
    .then(response => response.json())
    .then(data=> console.log(data))
    .then(data => data.results)
    .then(data => {
        data.forEach(item => quizContainer.appendChild(createQuizCard(item)));
    })
    .catch(error => console.error(error));

function checkAnswer(quizCard) {
    const selectedAnswer = quizCard.querySelector('.answers input[type="radio"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === quizCard.dataset.correctAnswer) {
            quizCard.classList.add('correct');
            quizCard.classList.remove('incorrect');
        } else {
            quizCard.classList.add('incorrect');
            quizCard.classList.remove('correct');
        }
    } else {
        quizCard.classList.add('incorrect');
        quizCard.classList.remove('correct');
    }
}

quizContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('check_button')) {
        const quizCard = event.target.closest('.quiz_card');
        checkAnswer(quizCard);
    }
});

function checkAllAnswers() {
    const quizCards = document.querySelectorAll('.quiz_card');

    quizCards.forEach(quizCard => {
        checkAnswer(quizCard);
    });
}

const allCheckButton = document.querySelector('.all_check_button');
allCheckButton.addEventListener('click', checkAllAnswers);















