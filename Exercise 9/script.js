
const heart = document.getElementById('heart');
const counter = document.getElementById('counter');
let count = 0;
heart.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});