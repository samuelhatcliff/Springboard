const formElement = document.querySelector("form");
let topCap = document.querySelector('input[name = "toptext"]')
let bottomCap = document.querySelector('input[name = "bottomtext"]')
let imgUrl = document.querySelector('input[name = "imgsrc"]')
const memeList = document.getElementById("memes");

formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    if (imgUrl.value.includes(" ") === false) {
        let newMeme = document.createElement('div')
        let img = document.createElement('img');
        img.src = imgUrl.value;
        newMeme.appendChild(img);
        newMeme.classList.add("style");

        let topDiv = document.createElement('div');
        topDiv.append(topCap.value);
        topDiv.classList.add("toptextdiv");

        let bottomDiv = document.createElement('div');
        bottomDiv.append(bottomCap.value);
        bottomDiv.classList.add("bottomtextdiv");

        newMeme.append(topDiv);
        newMeme.append(bottomDiv);

        let removeButton = document.createElement('div');
        removeButton.innerHTML = '<button>Remove</button>'
        newMeme.append(removeButton);
        memes.append(newMeme);
        formElement.reset()
    }
})

memeList.addEventListener('click', function (e) {
    if (e.target.tagName === "BUTTON") {
        console.log(e.target.parentElement);
        e.target.parentElement.parentElement.remove();
    }
})
