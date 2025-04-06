
const quizData = {
    easy: [
        { question: "Which CSS property controls the text color?", options: ["text-style", "color", "font-color"], answer: 2 },
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"], answer: 0 },
        { question: "Which language is used for styling web pages?", options: ["HTML", "CSS", "JavaScript"], answer: 1 },
        { question: "Which of the following is a valid CSS unit?", options: ["px", "em", "Both"], answer: 2 },
        { question: "What does 'id' attribute in HTML do?", options: ["Sets a unique identifier", "Defines a class", "Creates an inline style"], answer: 0 },
        { question: "Which property is used for font size in CSS?", options: ["font-style", "font-weight", "font-size"], answer: 2 },
        { question: "Which HTML tag is used to link an external CSS file?", options: ["<script>", "<link>", "<style>"], answer: 1 },
        { question: "Which of these is a JavaScript framework?", options: ["Django", "React", "Flask"], answer: 1    },
        { question: "Which is the correct way to declare a variable in JavaScript?", options: ["let myVar;", "myVar =", "var = myVar"], answer: 0 },
        { question: "What does CSS stand for?", options: ["Cascading Style Sheet", "Colorful Style System", "Computer Style Sheet"], answer: 1 },
        { question: "Which of the following is a valid way to declare an array in JavaScript?", options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)"], answer: 0 },
        { question: "Which function is used to round a number in JavaScript?", options: ["round()", "Math.round()", "toFixed()"], answer: 1 },
        { question: "Which CSS property is used to change the background color?", options: ["background-color", "background-image", "color"], answer: 0 },
        { question: "Which JavaScript method adds an element to the end of an array?", options: ["push()", "pop()", "shift()"], answer: 0 },
        { question: "Which HTML element is used to define an unordered list?", options: ["ul", "li", "ol"], answer: 1 },
        { question: "Which of these CSS properties controls the size of text?", options: ["font-size", "font-weight", "text-size"], answer: 0 },
        { question: "What is the correct syntax for a comment in JavaScript?", options: ["// Comment", "/* Comment */", "# Comment"], answer: 0 },
        { question: "Which of the following is not a valid JavaScript data type?", options: ["Number", "Boolean", "Float"], answer: 2 },
        { question: "What does the 'this' keyword refer to in JavaScript?", options: ["Current object", "Global object", "Function object"], answer: 1 },
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: 0 },
        { question: "Which selector targets all elements with the class highlight?", options: [".highlight", "#highlight", "highlight"], answer: 1 },
        { question: "How do you add a background color to an element?", options: ["background-color:red;", "color:red;", "text-color:red;"], answer: 0 },
        { question: "Which property cotrols the spacing between lines of text?", options: ["line-height", "letter-spacing", "word-spacing"], answer: 1 },
        { question: "What is the primary data type for whole numbers in Java?", options: ["float", "int", "double"], answer: 2 },
        { question: "Which keyword is used to define a class in Java?", options: ["function", "class", "struct"], answer: 2 },
        { question: "What is the output of System.out.println(5+2*3);?", options: ["11", "21", "15"], answer: 0 },
        { question: "What does the main method in Java look like?", options: ["public void main(String[] args)", "public static void main(String[] args)", "static public void main(String[] args)"], answer: 2 },
        { question: "Which loop is the best suited for iterating a fixed number of times?", options: ["while", "do-while", "for"], answer: 3 },
        { question: "What is the primary data type for characters in C#?", options: ["int", "char", "string"], answer: 2 },
        { question: "Which keyword is used to create a new instance of a class in C#?", options: ["new", "create", "instance"], answer: 1 },
        { question: "what is the output of Console.Writeline(5+2*3);?", options: ["11", "21", "15"], answer: 0 },
        { question: "Which keyword is used to define a method that doesn't return a value?", options: ["return", "void", "null"], answer: 2 },
        { question: "Which access modifier allows access only within the same class?", options: ["public", "private", "protected"], answer: 2 },
        { question: "Which SQL command is used to retrieve data from a database?", options: ["SELECT", "INSERT", "UPDATE"], answer: 0 },
        { question: "Which SQL command is used to add new data to a table?", options: ["SELECT", "INSERT", "UPDATE"], answer: 2 },
        { question: "Which data type is the best for storing large text in MySQL?", options: ["VARCHAR", "INT", "TEXT"], answer: 3 },
        { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Statistical Query Language"], answer: 0 },
        { question: "What is an algorithm?", options: ["A progamming language", "A step-by-step procedure to solve a problem", "A type of computer hardware"], answer: 2 },
        { question: "What does RAM Stand for?", options: ["Read-Only Memory", "Random Access Memory", "Read Access Memory"], answer: 2 },
        { question: "What is a variable?", options: ["A constant value", "A named storage location for data", "A type of loop"], answer: 2 },
        { question: "What is debugging?", options: ["Writing code", "Finding and fixing errors in code", "Compiling code"], answer: 2 },
        { question: "Which of these is NOT a common programming paradigm?", options: ["Object-Oriented Programming", "Procedural Programming", "Quatum Programming"], answer: 3 },
        { question: "What is source code?", options: ["The compiled program", "The human-readable version of a program", "The machine code"], answer: 2 },
        { question: "What is a compiler?", options: ["A program that interprets code line by line", "A program that translates source code into machine code", "A program that runs a program"], answer: 2 },
        { question: "What is an operating system?", options: ["A type of application software", "Software that manages computer hardware and software resources", "A type of programming language"], answer: 2 },
        { question: "What is an IP address?", options: ["A unique identifier for a website", "A unique identifier for a computer on a network", "A type of network protocol"], answer: 2 },
        { question: "What is domain name?", options: ["A numerical identifier for a website", "A human-readable name for a website", "A type of network protocol"], answer: 0 },
        { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HyperText Transport Protocol", "HyperTransfer Transmission Protocol"], answer: 0 },
        { question: "What is a web server?", options: ["A computer that stores web pages", "A program that stores web pages", "A type of web browser"], answer: 0 },
        { question: "What is a web browser?", options: ["A program that displays web pages", "A type of computer", "A type of network"], answer: 0 },

    ],
    medium: [
        { question: "Which method is used to convert a JSON string into a JavaScript object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()"], answer: 1 },
        { question: "Which CSS property is used to display elements in a row or column?", options: ["flex", "display", "grid"], answer: 0 },
        { question: "How do you declare a function in JavaScript?", options: ["function myFunction()", "def myFunction()", "void myFunction()"], answer: 0 },
        { question: "Which method removes whitespace from both sides of a string?", options: ["trim()", "strip()", "clean()"], answer: 0 },
        { question: "Which of these is a valid CSS selector?", options: [".class", "#id", "tagname"], answer: 2 },
        { question: "Which operator is used to compare both value and type in JavaScript?", options: ["==", "=", "==="], answer: 2 },
        { question: "What is the correct way to write a JavaScript array?", options: ["[1,2,3]", "(1,2,3)", "{1,2,3}"], answer: 0 },
        { question: "Which keyword is used to define a JavaScript class?", options: ["function", "class", "object"], answer: 1 },
        { question: "Which method is used to round numbers in JavaScript?", options: ["round()", "Math.round()", "toFixed()"], answer: 1 },
        { question: "What is the default value of 'display' in a <div> element?", options: ["inline", "block", "inline-block"], answer: 1 },
        { question: "Which method is used to add an event listener in JavaScript?", options: ["addEventListener()", "onEvent()", "bindEvent()"], answer: 0 },
        { question: "Which property is used to change the text color in CSS?", options: ["color", "font-color", "text-color"], answer: 0 },
        { question: "What is the correct way to include a JavaScript file in HTML?", options: ["<script src='script.js'></script>", "<js src='script.js'></js>", "<javascript src='script.js'></javascript>"], answer: 0 },
        { question: "How do you define a constant variable in JavaScript?", options: ["const myVar", "let myVar", "var myVar"], answer: 0 },
        { question: "Which CSS property is used to control the width of an element?", options: ["width", "height", "padding"], answer: 0 },
        { question: "What is the correct syntax to create a JavaScript object?", options: ["{key: value}", "key = value", "object(key, value)"], answer: 0 },
        { question: "Which CSS property is used to control the layout of elements in a container?", options: ["display", "flexbox", "layout"], answer: 0 },
        { question: "Which JavaScript method is used to remove an element from an array?", options: ["shift()", "pop()", "splice()"], answer: 2 },
        { question: "What is the correct HTML tag to define a table?", options: ["<table>", "<tbody>", "<thead>"], answer: 0 },
        { question: "Which of the following is used to store the current date and time in JavaScript?", options: ["new Date()", "new Time()", "currentDate()"], answer: 2 },
        { question: "What CSS property controls the transparency of an elements?", options: ["opacity", "visibility", "filter"], answer: 1 },
        { question: "Which pseudo-class selects the first child ofan elements?", options: [":last-child", ":first-child", ":nth-child(1)"], answer: 1 },
        { question: "How do you create a horizontal line using CSS?", options: ["<hr> tag with CSS styling", "border-bottom property on a div", "Both a and b are correct"], answer: 3 },
        { question: "What is the purpose of the box-sizing property?", options: ["To control size and padding and border", "To control the size og the margin", "To control the size of the content only"], answer: 1 },
        { question: "Which CSS unit is best for responsive design based on the viewport width?", options: ["px", "em", "vw"], answer: 3 },
        { question: "What is an interface in Java?", options: ["A class that cannot be instantiated", "A blueprint for classes", "A type of data structure"], answer: 2 },
        { question: "What keyword is used to throw an exeption in Java?", options: ["catch", "throw", "finally"], answer: 2 },
        { question: "What does the static keyword indicate for a method?", options: ["It belongs to the class,not a specific object", "It can be overridden in subclasses", "It requires an object instance to be called"], answer: 1 },
        { question: "What is a HashMap in Java?", options: ["A linear data structure", "A key-value pair data structure", "An ordered list"], answer: 2 },
        { question: "What is the purpose of a contructor in a Java class?", options: ["Yo initialize the object's state.", "To define the class's methods.", "To handle exceptions."], answer: 1 },
        { question: "What is the continuous integration/continuous deployment(CI/CD)?", options: ["A set of practices that automate the process of building, testing, and deploying software.", "A type of programming language.", " A type of database."], answer: 0 },
        { question: "What is the pull request?", options: ["A request to merge changes from one branch to another.", "A type of progamming language.", "A type of database."], answer: 0 },
        { question: "What is a merge?", options: ["Combining changes from different branches.", "A type of programming language.", "A type of database."], answer: 0 },
        { question: "What is a branch?", options: ["A type of data base.", "A parallel version of a repository.", "A type of programming language."], answer: 2 },
        { question: "What is a commit?", options: ["A type of database.", "A type of programming language.", "A snapshot of changes made to a repository."], answer: 3 },
        { question: "What is a repository?", options: ["A type of programming language.", "A central location where code is stored and managed.", "A type of database."], answer: 2 },
        { question: "What is the GitHub?", options: ["A type of database.", "A type of programming language.", "A web-based hosting service for Git repositories."], answer: 3 },
        { question: "What is Git?", options: ["A centralized version control system.", "A distributed version control system.", "A type of database."], answer: 2 },
        { question: "What is version control system(VCS)?", options: ["A type of database.", "A type of programming language.", "A system that records changes to file or set of files over time so that you can recall specific versions later."], answer: 3 },
        { question: "What is refactoring?", options: ["Writing new computer code.", "Restructuring existing computer code without changing it's external behavior.", "Testing computer code."], answer: 2 },
        { question: "What is a design pattern?", options: ["A type of database.", "A type of programming language.", "A reusable solution to a commonly occuring problem in software design."], answer: 3 },
        { question: "What is an algorithm design pattern?", options: ["A type of database.", "A reusable solution to a commonly occuring problem in algorithm design.", "A type of programming language."], answer: 2 },
        { question: "What is a user story?", options: ["A short, simple description of a feature told from the perspective of the user.", "A type of programming language.", "A type of database."], answer: 0 },
        { question: "What is a use case?", options: ["A description of how a user interacts with a system to achieve a goal.", "A type of database.", "A type of programming language."], answer: 0 },
        { question: "What is a software requirement?", options: ["A type of programming language.", "A type of database.", "A condition or capability needed by a user to solve a problem."], answer: 3 },
        { question: "What is white-box testing?", options: ["Testing without knowledge of the internal workings of the software.", "Testing with knowledge of the internal workings of the software.", "A type of performance testing."], answer: 2 },
        { question: "What is block-box testing?", options: ["A type of performance testing.", "Testing with knowledge of the internal workings of the software.", "Testing without knowledge of the internal workings of the software."], answer: 3 },
        { question: "What is user acceptance testing(AUT)?", options: ["Testing by end-users to ensure the software meets their needs.", "Testing by testers.", "Testing by developers."], answer: 0 },
        { question: "What is system testing?", options: ["Testing user interfaces.", "Testing the entire software system.", "Testing individual components of software."], answer: 2 },
        { question: "What is integration testing?", options: ["Testing the interaction between different components of software.", "Testing individual components of software.", "Testing the entire software system."], answer: 0 },
        { question: "What is unit testing?", options: ["Testing the entire software system.", "Testing user interfaces.", "Testing individual components of software."], answer: 3 },
    ],
    hard: [
        { question: "Which of the following is NOT a JavaScript data type?", options: ["Boolean", "Float", "Undefined"], answer: 1 },
        { question: "Which method is used to delay the execution of code in JavaScript?", options: ["setTimeout()", "delay()", "pause()"], answer: 0 },
        { question: "What does the '===' operator do in JavaScript?", options: ["Checks value equality", "Checks value and type equality", "Assigns a value"], answer: 1 },
        { question: "Which of these JavaScript methods is used to create a new array from an existing one?", options: ["map()", "filter()", "reduce()"], answer: 0 },
        { question: "Which method is used to remove the last element from an array in JavaScript?", options: ["pop()", "shift()", "unshift()"], answer: 0 },
        { question: "What is the result of 0 == '0' in JavaScript?", options: ["true", "false", "undefined"], answer: 0 },
        { question: "Which method is used to find an element by its ID in JavaScript?", options: ["getElementById()", "querySelector()", "getElementByName()"], answer: 0 },
        { question: "Which event is triggered when an element is clicked in JavaScript?", options: ["onclick", "onload", "onfocus"], answer: 0 },
        { question: "What is the output of the following JavaScript code: console.log(1 + '1')?", options: ["11", "2", "undefined"], answer: 0 },
        { question: "Which of these JavaScript methods is used to sort an array?", options: ["sort()", "order()", "arrange()"], answer: 0 },
        { question: "What does the 'return' keyword do in a JavaScript function?", options: ["Exits the function", "Returns a value", "Both"], answer: 2 },
        { question: "Which CSS property is used to change the font size?", options: ["font-size", "font-weight", "font-style"], answer: 0 },
        { question: "Which JavaScript method is used to remove all whitespace from a string?", options: ["trim()", "strip()", "clean()"], answer: 0 },
        { question: "Which of these JavaScript functions is used to parse a JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()"], answer: 0 },
        { question: "What is the purpose of the 'use strict' directive in JavaScript?", options: ["Enable strict mode", "Disable strict mode", "It has no effect"], answer: 0 },
        { question: "Which method is used to join all elements of an array into a string in JavaScript?", options: ["join()", "concat()", "merge()"], answer: 0 },
        { question: "What does 'typeof' do in JavaScript?", options: ["Checks the type of a variable", "Returns the length of an array", "Returns a value of a variable"], answer: 0 },
        { question: "Which CSS property is used to control the alignment of text?", options: ["text-align", "font-align", "align"], answer: 0 },
        { question: "What is the output of the following JavaScript code: console.log(1 == true)?", options: ["true", "false", "undefined"], answer: 0 },
        { question: "Which JavaScript operator is used for strict equality comparison?", options: ["==", "=", "==="], answer: 2 },
        { question: "Which CSS property is used to control the alignment of text?", options: ["text-align", "font-align", "align"], answer: 0 },
        { question: "What is the output of the following JavaScript code: console.log(1 == true)?", options: ["true", "false", "undefined"], answer: 0 },
        { question: "Which JavaScript operator is used for strict equality comparison?", options: ["==", "=", "==="], answer: 2 },
        { question: "What does the <canvas> element in HTML allow you to do?", options: ["Embed images", "Draw graphics via JavaScript", "Create tables"], answer: 1 },
        { question: "What is returned by typeof NaN in JavaScript?", options: ["number", "NaN", "undefined"], answer: 0 },
        { question: "Which data structure uses Last-In-First-Out (LIFO)?", options: ["Queue", "Stack", "Heap"], answer: 1 },
        { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n log n)"], answer: 1 },
        { question: "Which HTML tag defines a table header?", options: ["<th>", "<td>", "<tr>"], answer: 0 },
        { question: "Which of these is NOT a JavaScript data type?", options: ["String", "Float", "Symbol"], answer: 1 },
        { question: "What is the result of console.log([] + {}) in JavaScript?", options: ["[object Object]", "NaN", "0"], answer: 0 },
        { question: "In Flexbox, what does flex: 1 do?", options: ["Fixes element width", "Hides the element", "Fills remaining space"], answer: 2 },
        { question: "What does the defer attribute in a script tag do?", options: ["Runs before HTML loads", "Blocks HTML parsing", "Runs after HTML is parsed"], answer: 2 },
        { question: "Which language is used to query databases?", options: ["SQL", "HTML", "PHP"], answer: 0 },
        { question: "Which of these is a NoSQL database?", options: ["MySQL", "MongoDB", "PostgreSQL"], answer: 1 },
        { question: "What is a closure in JavaScript?", options: ["Function with internal memory", "Loop inside function", "Function that runs once"], answer: 0 },

    ]
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

let currentLevel = "";
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Selecting elements from the HTML
document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById("quiz-container");
    const leaderboard = document.getElementById("leaderboard");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultsElement = document.getElementById("results");
    const finalScoreElement = document.getElementById("final-score");
    const easyBtn = document.getElementById("easy-btn");
    const mediumBtn = document.getElementById("medium-btn");
    const hardBtn = document.getElementById("hard-btn");
    
    easyBtn.addEventListener("click", () => startQuiz("easy"));
    mediumBtn.addEventListener("click", () => startQuiz("medium"));
    hardBtn.addEventListener("click", () => startQuiz("hard"));
    
    function startQuiz(level) {
        currentLevel = level;
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizContainer.classList.remove("hidden");
        leaderboard.classList.add("hidden");
        
        // Shuffle the questions before displaying and slice the first 10 questions
        shuffleArray(quizData[currentLevel]);
        quizData[currentLevel] = quizData[currentLevel].slice(0, 10);
        
        // Hide difficulty buttons after quiz starts
        document.getElementById("level-selection").classList.add("hidden");
        
        displayQuestion();
    }

    function displayQuestion() {
        let questionData = quizData[currentLevel][currentQuestionIndex];
        questionElement.textContent = questionData.question;
        optionsElement.innerHTML = "";
        
        questionData.options.forEach((option, index) => {
            let button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option");
            button.onclick = () => checkAnswer(index);
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        let questionData = quizData[currentLevel][currentQuestionIndex];
        let isCorrect = selectedIndex === questionData.answer;
        userAnswers.push({
            question: questionData.question,
            selected: questionData.options[selectedIndex],
            correct: questionData.options[questionData.answer],
            isCorrect: isCorrect
        });
        
        if (isCorrect) score++;
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizData[currentLevel].length) {
            displayQuestion();
        } else {
            showLeaderboard();
        }
    }

    function showLeaderboard() {
        quizContainer.classList.add("hidden");
        leaderboard.classList.remove("hidden");
        resultsElement.innerHTML = "";
        
        userAnswers.forEach((answer, index) => {
            let resultItem = document.createElement("p");
            resultItem.innerHTML = `<strong>Q${index + 1}:</strong> ${answer.question}<br>
                                    Your Answer: <span class="${answer.isCorrect ? 'correct' : 'incorrect'}">${answer.selected}</span><br>
                                    Correct Answer: <span class="correct">${answer.correct}</span>`;
            resultsElement.appendChild(resultItem);
        });
        
        let remark = score == 10 ? "Excellent! Very Good! 🎉" : score >= 7 ? "Nice Try ! 😊" : score >= 6 ? "Thats bad! 👍" : "You Failed. Try Again! ❌";
        finalScoreElement.textContent = `Final Score: ${score} / 10 - ${remark}`;
        
        let restartButton = document.createElement("button");
        restartButton.textContent = "Restart Quiz";
        restartButton.classList.add("restart-btn");
        restartButton.onclick = () => location.reload();
        leaderboard.appendChild(restartButton);
    }
});

document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("start-btn").style.display = "none"; // Hide start button
    document.getElementById("level-selection").classList.remove("hidden"); // Show level selection
});
document.getElementById("level-selection").classList.add("hidden"); // Hide level selection on load




