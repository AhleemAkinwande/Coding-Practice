const quizInfo = [
    {
        question: 'What is the smallest planet in our solar system?',
        a: 'Earth',
        b: 'The Moon',
        c: 'Pluto',
        d: 'Mercury',
        answer: 'd'
    }, {
        question: 'Which Italian city is famous for its leaning tower?',
        a: 'Rome',
        b: 'Paris',
        c: 'Venice',
        d: 'Pisa',
        answer: 'd'
    }, {
        question: 'What is the chemical symbol for gold?',
        a: 'Au',
        b: 'Go',
        c: 'Li',
        d: 'Gd',
        answer: 'a'
    }, {
        question: 'What is the largest organ in the human body?',
        a: 'Brain',
        b: 'Liver',
        c: 'Large Intestines',
        d: 'Skin',
        answer: 'd'
    }, {
        question: 'In what year did the first Star Wars movie come out?',
        a: '1975',
        b: '1977',
        c: '1987',
        d: '1982',
        answer: 'b'
    }, {
        question: 'In what year did World War II end?',
        a: '1917',
        b: '1942',
        c: '1945',
        d: '1938',
        answer: 'c'
    }, {
        question: 'What is the name of the toy company that creates the "Small Soldiers" action figures in the movie?',
        a: 'Hasbro',
        b: 'Globotech Industries',
        c: 'DARPA',
        d: 'Play Pals',
        answer: 'b'
    }, {
        question: 'Who was the starting Center for the 1979 Philadelphia Eagles',
        a: 'Guy Morriss',
        b: 'Mike Evans',
        c: 'Ken Reeves',
        d: 'Jason Kelce',
        answer: 'a'
    }
];

const questionElement = document.getElementById('question'); 
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizInfo = quizInfo[currentQuiz];

    questionElement.innerHTML = currentQuizInfo.question;
    a_text.innerHTML = currentQuizInfo.a;
    b_text.innerHTML = currentQuizInfo.b;
    c_text.innerHTML = currentQuizInfo.c;
    d_text.innerHTML = currentQuizInfo.d;

    currentQuiz++;
}

submitButton.addEventListener('click', () => {
    currentQuiz++;

    if (currentQuiz < quizInfo.length) {
        loadQuiz();
    } else {
        alert("Quiz Finished");
    }

})
