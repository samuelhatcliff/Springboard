//1
document.getElementById('container');
//2
document.querySelector('section')
//3
document.getElementsByClassName("second");
//4
document.querySelector("ol .third");
//5
const container = document.getElementById('container');
container.textContent = "Hello!"
//6
const footerDiv = document.querySelector(".footer")
footerDiv.classList.add("main");
//7
footerDiv.classList.remove("main");
//8
const newListItem = document.createElement("li");
//9
newListItem.innerText = "four";
//10
const ul = document.querySelector('ul');
ul.append(newListItem)
//11
const toDos = document.querySelectorAll('ul li');
for (let thing of toDos) {
    thing.style.color = 'green'
}
//12
const footer = document.querySelector(".footer");
footer.remove();


