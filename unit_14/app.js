<<<<<<< HEAD

const form = document.querySelector("form");
let input = document.querySelector('input[name = "input"]')
const ul = document.getElementById('ul')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputValue = input.value;
    async function searchReq() {
        const req = await axios.get('https://api.giphy.com/v1/gifs/random',
            {
                params:
                {
                    api_key: 'FiaPPMb9RyZEnKmYrj4sNpbTPgmxDgz1',
                    tag: `${inputValue}`,
                }
            });
        const imagesrc = (req.data.data.image_url);
        const image = document.createElement('img');
        image.src = imagesrc;
        ul.append(image);
=======
console.log("Let's get this party started!");


const form = document.querySelector("form");
let inputValue = document.querySelector('input[name = "input"]').value

form.addEventListener('submit', function (e) {
    e.preventDefault();
    async function searchReq() {
        const req = await axios.get('api.giphy.com/v1/gifs/search',
            {
                params:
                {
                    'api_key': 'FiaPPMb9RyZEnKmYrj4sNpbTPgmxDgz1',
                    'q': 'funny',
                    // limit: 1,
                }
            });
        console.log(req);
>>>>>>> 12d3b3c69abdd299db3d837b5ffbcb50462dd19c
    }
    searchReq();
});

