//categories array is the main data structure 
let categories = [];
let numOfCategories = 6;
let numOfQuestions = 5;

setupAndStart();
// returns an array of category ids
async function getCategoryIds() {
    let response = await axios.get("https://jservice.io/api/categories?count=100")
    let randomSix = []
    //for loops extracts 6 random categories from response and puts the data into an array (randomSix)
    for (let i = 0; i <= 5; i++) {
        randomSix.push(response.data[Math.floor(Math.random() * response.data.length)]);
    }
    //the category id's from this categories are then mapped to a new array (idArr)
    idArr = randomSix.map(id => id.id)
    //titles on the left are added to categories
    for (let i = 0; i <= 5; i++) {
        let catVal = randomSix[i]['title'];
        categories.push({ title: catVal });
    }
    return idArr;
}

//returns data about a category 
async function getCategory(catId) {
    let response = await axios.get(`https://jservice.io/api/category?id=${catId}`);
    let responseData = response.data.clues
    return responseData;
}

async function fillTable() {
    for (cat of categories) {
        $("thead tr").append($('<td />', { text: cat.title }))
    }
    for (let x = 0; x < numOfQuestions; x++) {
        let newRow = $("<tr>")
        for (let y = 0; y < numOfCategories; y++) {
            let newCell = $('<td />', { text: "?" }).attr('id', `${x},${y}`).on('click', handleClick)
            newRow.append(newCell);
        }
        $('#t-head').append(newRow);
    }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    let evtId = evt.target.id;
    let yAxis = evtId[2];
    let xAxis = evtId[0];
    let correctCat = categories[yAxis];
    let correctClue = correctCat.clues[xAxis];
    let boardElement = document.getElementById(evtId);
    let correctQuestion = correctClue.question;
    let correctAnswer = correctClue.answer;
    if (correctClue.showing === null) {
        correctClue.showing = 'question';
        boardElement.innerHTML = correctQuestion;
    } else if (correctClue.showing === 'question') {
        correctClue.showing = 'answer';
        boardElement.innerHTML = correctAnswer;
    }
}

async function setupAndStart() {
    for (cat of categories) {
        $("thead tr").append($('<td />', { text: cat.title }))
    }
    //idArr is the array of ids returned from getCategoryIds
    let idArr = await getCategoryIds();
    //promiseArr makes array of data for each category by using ids from idArr
    let promiseArr = [];
    for (let id of idArr) {
        promiseArr.push(getCategory(id));
    }
    //categoryArr extracts those promises out into an array of categories
    let categoryArr = [];
    for (let i = 0; i <= 5; i++) {
        let category = await promiseArr[i];
        categoryArr.push(category);
    }
    //qArr is what contains each clue (ie question, answer, showing)
    //nested for loop (item of clues) creates an object for each Q&A, along with a showing property, appends to qArr
    for (let i = 0; i <= 5; i++) {
        let qArr = []
        let clues = categoryArr[i];
        for (item of clues) {
            let question = item['question'];
            let answer = item['answer'];
            let showing = null
            qArr.push({ question: question, answer: answer, showing: showing });
        }
        //this new property of categories (clues) is at the same index of where "title" already is
        //clues is added to categories arraw with qArr as its value
        categories[i]['clues'] = qArr;
    }
    fillTable();
    return categories
}

const restart = document.getElementById('restart');
restart.addEventListener('click', restartFunc);
function restartFunc() {
    location.reload();
}