let todos = [];
const formElement = document.querySelector("form");
const ul = document.querySelector('ul');
let text = document.querySelector('input[name = "text"]')
let counter = 0;
let removeTodo;
let storedList = localStorage.getItem('myList')
let parsedList = JSON.parse(storedList);
if (parsedList) {
    todos = parsedList;
    if (parsedList.length > 1) {
        counter = parseInt(parsedList[parsedList.length - 1].id);
    }
    for (item of parsedList) {
        let newTodo = document.createElement('li')
        newTodo.innerHTML = item.task + ' ' + '<button>Remove</button>'
        if (item.striked === true) {
            newTodo.classList.toggle("strike");
        }
        let button = newTodo.children[0];
        button.setAttribute('id', item.id)
        ul.append(newTodo);

        button.addEventListener('click', function remove(e) {
            for (let object of todos) {
                if (e.target.id === object.id) {
                    removeTodo = object;
                }
                e.target.parentElement.remove();
            }
            todos.splice((todos.indexOf(removeTodo)), 1);
            storedList = localStorage.setItem('myList', JSON.stringify(todos))
        })

        button.parentElement.addEventListener('click', function strike(e) {
            if (e.target !== button) {
                e.target.classList.toggle("strike");
                for (let object of todos) {
                    if (e.target.children[0].id === object.id) {
                        if (object.striked === false) {
                            object.striked = true;
                        }
                        else if (object.striked === true) {
                            object.striked = false;
                        }


                    }
                }
            }
            localStorage.setItem('myList', JSON.stringify(todos))
            storedList = localStorage.getItem('myList')
        })
    }
}

formElement.addEventListener('submit', function (e) {
    counter += 1;
    e.preventDefault();
    let newTodo = document.createElement('li');
    newTodo.innerHTML = text.value + '     ' + '<button>Remove</button>';
    let button = newTodo.children[0];
    button.setAttribute('id', counter)
    ul.append(newTodo);
    console.log(e.tagName);

    let todo = { task: text.value, striked: false, id: button.getAttribute('id') };
    todos.push(todo);
    localStorage.setItem('myList', JSON.stringify(todos));

    button.addEventListener('click', function remove(e) {
        for (let object of todos) {
            if (e.target.id === object.id) {
                removeTodo = object;
            }


            e.target.parentElement.remove();
        }
        todos.splice((todos.indexOf(removeTodo)), 1);
        storedList = localStorage.setItem('myList', JSON.stringify(todos))
    })

    button.parentElement.addEventListener('click', function strike(e) {
        if (e.target !== button) {
            e.target.classList.toggle("strike");
            for (let object of todos) {
                if (e.target.children[0].id === object.id) {
                    if (object.striked === false) {
                        object.striked = true;
                    }
                    else if (object.striked === true) {
                        object.striked = false;
                    }


                }
            }
        }
        localStorage.setItem('myList', JSON.stringify(todos))
        storedList = localStorage.getItem('myList')
    })
})


