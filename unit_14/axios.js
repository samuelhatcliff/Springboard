

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