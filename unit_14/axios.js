// const response = axios.get('https://swapi.dev/api/planets')
// async function getData() {
//     const response = await axios.get('https://swapi.dev/api/planets');
//     const { next, results } = response.data;
//     for (let planet of results) {
//         console.log(planet.name)
//     }
//     const res2 = await axios.get(next);
//     console.log(res2.data.results[0].name);

// }
// getData();
// console.log("ijoihigu");

// async function getLaunches() {
//     const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
//     renderLaunches(res.data);
// }


// function renderLaunches(launches) {
//     const ul = document.querySelector('#launches');
//     for (let launch of launches) {
//         const newLI = document.createElement('LI');
//         const mission = document.createElement('B')
//         mission.innerText = launch.mission_name;
//         newLI.append(mission);
//         newLI.innerHTML += ` - ${launch.rocket.rocket_name}`
//         ul.append(newLI);
//     }
// }

// const btn = document.querySelector('#getLaunches');
// btn.addEventListener('click', getLaunches)

// async function getUsers() {
//     const res = await axios.get('https://reqres.in/api/users?page=2');
//     console.log(res);
// }

// async function createUser() {
//     const res = await axios.post('https://reqres.in/api/users?page=2', { pooop: 'ok', test: 'yeaaa' })
//     console.log(res)
// }

async function getUser(token) {
    const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users/username', { params: { token } })
    console.log(res);
}

// async function signUp(username, password, name) {
//     const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { name, username, password } })
//     console.log(res);
// }
// signUp('samhatcliff', 'samhatcliff', 'samhatcliff')

async function login(username, password, name) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {
        "user": {
            "username": "samhatcliff",
            "password": "samhatcliff"
        }
    })
    return res.data.token;
}

async function getUsersWithAuth() {
    const token = await login('samhatcliff', 'samhatcliff')
    getUser(token);
}
getUsersWithAuth();

async function createStory() {
    const token = await login('samhatcliff', 'samhatcliff');
    const newStory = {
        token,
        story: {
            author: 'samhatcliff',
            title: 'coolstorybro',
            url: 'http://niceone111.com'
        }
    }
    const res = axios.post('POSThttps://hack-or-snooze-v3.herokuapp.com/stories', newStory,);
    console.log(res);
}
createStory();