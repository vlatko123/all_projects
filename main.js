let buttons = document.querySelectorAll('button');
let p = document.querySelector('p');
let space = document.getElementById('space');
function clickHandler(event) {
    let element = event.target.innerText;
    if (event.target === space){
        element ="\u00A0"; //whitespace
    }
    p.innerText += element;
    event.preventDefault();
}

buttons.forEach(function(kopce){
    kopce.addEventListener('click', clickHandler);
})