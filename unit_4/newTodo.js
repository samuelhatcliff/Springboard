const formElement = document.querySelector("form");
const ul = document.querySelector('ul');
let text = document.querySelector('input[name = "text"]')
let todos = [];
let storedList = localStorage.getItem('myList')
let parsedList = JSON.parse(storedList);
if (parsedList) {
    todos = parsedList;
    for (item of parsedList) {
        let newTodo = document.createElement('li')
        newTodo.innerHTML = item.task + ' ' + '<button>Remove</button>'
        if (item.striked) {
            newTodo.classList.toggle("strike");
        }
        ul.append(newTodo);
    }
}
ul.addEventListener('click', function (e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        for (obj of todos) {
            if (e.target.parentElement.innerHTML.replace(' <button>Remove</button>', "")
                === obj.task) {
                todos.splice((todos.indexOf(obj)), 1)
            };
        }
        localStorage.setItem('myList', JSON.stringify(todos))
    }
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle("strike");
        for (let obj of todos) {
            if (e.target.innerHTML.replace(' <button>Remove</button>', "")
                === obj.task) {
                if (obj.striked) {
                    obj.striked = false
                }
                else { obj.striked = true };
            }
        }
        localStorage.setItem('myList', JSON.stringify(todos))
    }
})
formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    let newTodo = document.createElement('li');
    if (text.value !== "") {
        newTodo.innerHTML = text.value + ' ' + '<button>Remove</button>';
        ul.append(newTodo);
        let todo = { task: text.value, striked: false };
        todos.push(todo);
        localStorage.setItem('myList', JSON.stringify(todos));
        formElement.reset()
    };
})