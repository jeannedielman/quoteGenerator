var sayings = new Array (
'Carpe Diem',
'Silence is golden but duck tape is silver.',
'An apple a day keeps the doctor away.',
'To each his own.',
'If at first you don\'t succeed, try again.',
'Never settle for mediocrity, strive for success.',
'Live and let live.',
'Even a broken clock is right twice a day',
'Be careful what you wish for',
'Make each day count.',
'Don\'t cry over spilled milk.',
'Be the change you want to see.',
'Be the best version of YOU',
'C\'est la vie'
);

function getSayings() {
	var randomNumber = Math.floor(Math.random() * sayings.length);
	document.getElementById('sayings').innerHTML = sayings[randomNumber];
}




