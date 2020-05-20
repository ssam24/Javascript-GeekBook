const emptyBox = document.querySelector('.emptybox');

const image =  `<img src='http://placehold.it/300x300'>`;

let emptyString = `<img src='http://www.fillmurray.com/300/300'>`; ;

emptyBox.innerHTML = image || emptyString ; 