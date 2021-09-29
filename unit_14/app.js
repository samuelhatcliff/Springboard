
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
    }
    searchReq();
});

