let table = document.querySelector('.table');

let amountBoxes = 621;


for (let i = 0; i < amountBoxes; i++) {
    let box = document.createElement('div')
    box.classList.add('box');

    table.append(box)

    box.addEventListener('mouseenter', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))

}


function setColor(item) {
    if (item.style.background == '') {
        item.style.background = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    }
}

function removeColor(item) {
    item.style = `background: '';`
} 