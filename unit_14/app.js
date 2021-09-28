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
    }
    searchReq();
});

