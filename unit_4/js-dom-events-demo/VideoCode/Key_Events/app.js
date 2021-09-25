const removeButtons = document.querySelectorAll('li button')
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name')
const friendList = document.querySelector('#add-friend');



for (let btn of removeButtons) {
	btn.addEventListener('click', function (e) {
		e.target.parentElement.remove()
	})
}



form.addEventListener('submit', function (e) {
	e.preventDefault();
	const newFriend = document.createElement('li');
	const removeBtn = document.createElement('button');
	removeBtn.innerText = 'UnFriend';
	newFriend.innerText = input.value;
	newFriend.appendChild(removeBtn);
	input.value = '';
	friendList.appendChild(newFriend);
}


























// // LISTENING FOR KEY EVENTS ON THE ENTIRE DOCUMENT:
// // document.addEventListener('keypress', function(e) {
// // 	console.log(e.key);
// // });

// // document.addEventListener('keydown', function(e) {
// // 	console.log(e.key);
// // });

// // document.addEventListener('keyup', function(e) {
// // 	console.log(e.key);
// // });

// // LISTENING FOR KEY EVENTS ON A SPECIFIC INPUT...
// // keydown fires anytime a key is pressed (down, not when it's released)
// document.querySelector('input').addEventListener('keydown', function(e) {
// 	console.log('KEY DOWN: ', e.key);
// });

// // keypress is fired only when a character is produced (like 'A' or '1', but not for keys like caps lock or shift)
// document.querySelector('input').addEventListener('keypress', function(e) {
// 	console.log('KEY PRESS: ', e.key);
// });
