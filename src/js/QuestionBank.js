// Object { type: "multiple",
// difficulty: "easy",
// category: "General Knowledge",
// question: "Who invented the first ever chocolate bar, in 1847?",
// correct_answer: "Joseph Fry",
// incorrect_answers: (3) […] }

//

// 0: "Entertainment: Comics"
// 1: "Entertainment: Japanese Anime &amp; Manga"
// 2: "Entertainment: Film"
// 3: "Entertainment: Video Games"
// 4: "History"
// 5: "Entertainment: Television" ​​
// 6: "Geography"
// 7: "Vehicles"
// 8: "Mythology"
// 9: "Entertainment: Music"
// 10: "Animals"
// 11: "Science: Computers"
// 12: "General Knowledge"
// 13: "Entertainment: Musicals &amp; Theatres"
// 14: "Science &amp; Nature"
// 15: "Science: Mathematics"
// 16: "Entertainment: Cartoon &amp; Animations"
// 17: "Sports"

export const QBank1 = (response) => {
  const arr = [];
  const setCat = [];
  response.forEach((value) => {
    setCat.push(value.category);
    const obj = {};
    obj.question = decodeTextData(value.question);
    obj.category = decodeTextData(value.category);
    const answer = [];
    const correct = {};
    correct.ans = decodeTextData(value.correct_answer);
    correct.correct = true;
    answer.push(correct);
    value.incorrect_answers.forEach((value1) => {
      const obj1 = {};
      obj1.ans = decodeTextData(value1);
      obj1.correct = false;
      answer.push(obj1);
    });
    obj.answer = randomiseQuestion(answer);
    arr.push(obj);
  });
  // console.log(new Set(setCat), setCat);
  return randomiseQuestion(arr.concat(GeneralKnowledge1));
};

const decodeTextData = (text) => {
  let htmlParser = document.createElement("textarea");
  htmlParser.innerHTML = text;

  return htmlParser.value;
};

const GeneralKnowledge1 = randomiseQuestion([
  {
    question: "Which of these is a primary color?",
    category: "General Knowledge",
    answer: randomiseQuestion([
      { ans: "Purple", correct: false },
      { ans: "Red", correct: true },
      { ans: "Black", correct: false },
      { ans: "Orange", correct: false },
    ]),
  },
  {
    question:
      "What is the name of the biggest country in the world by landmass?",
      category: "Geography",
    answer: randomiseQuestion([
      { ans: "USA", correct: false },
      { ans: "China", correct: false },
      { ans: "Russia", correct: true },
      { ans: "Canada", correct: false },
    ]),
  },
  {
    question: "What is the capital of Australia?",
    category: "Geography",
    answer: randomiseQuestion([
      { ans: "Canberra", correct: true },
      { ans: "Sydney", correct: false },
      { ans: "Queensland", correct: false },
      { ans: "Houston", correct: false },
    ]),
  },
  {
    question: "Pick the odd one out",
    category: "Geography",
    answer: randomiseQuestion([
      { ans: "Chile", correct: true },
      { ans: "Estonia", correct: false },
      { ans: "Sweden", correct: false },
      { ans: "Luxemborg", correct: false },
    ]),
  },
  {
    question: "The first world war started in which year?",
    category: "History",
    answer: randomiseQuestion([
      { ans: "1917", correct: false },
      { ans: "1940", correct: false },
      { ans: "1936", correct: false },
      { ans: "1914", correct: true },
    ]),
  },
  {
    question: "Which of these vitamins deficiency account for Scurvy?",
    category: "Science & Nature",
    answer: randomiseQuestion([
      { ans: "Vitamin A", correct: false },
      { ans: "Vitamin B", correct: false },
      { ans: "Vitamin C", correct: true },
      { ans: "Vitamin D", correct: false },
    ]),
  },
]);

function randomiseQuestion(arr) {
  let randArr = arr;
  for (let i = randArr.length - 1; i >= 0; i--) {
    let temp = Math.floor(Math.random() * i);
    let tempV = randArr[temp];
    randArr[temp] = randArr[i];
    randArr[i] = tempV;
  }
  return randArr;
}
