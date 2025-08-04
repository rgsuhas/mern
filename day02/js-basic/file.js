console.log('Hello, World!');

document.addEventListener('DOMContentLoaded', () => {
    const message = document.createElement('p');
    message.textContent = 'This is a simple JavaScript file.';
    document.body.appendChild(message);
});
console.log('This script has been loaded successfully.');

document.getElementById('clickMe').addEventListener('click', () => {
            alert('Button was clicked!')
            return document.body.innerHTML += '<p>Button clicked!</p>';
        });


function evenorodd() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (number % 2 === 0) {
        alert('The number is even.');
    } else {
        alert('The number is odd.');
    }
}

