/* ------------------------------------ */
/* --- Exercice 1 --- */
document.querySelector('#buttonex1').addEventListener('click', function (event) {
    document.querySelector('#txtEx1').classList.toggle("hide");
});

/* ------------------------------------ */
/* --- Exercice 2 --- */
document.addEventListener('scroll', function (event) {
    document.querySelector('#ex2-scroll-value').innerText = Math.floor(window.scrollY);
})

/* ------------------------------------ */
/* --- Exercice 3 --- */
const animals = document.querySelector('#ex3-animals');
document.querySelector('#btnEx3').addEventListener('click', function (event) {
    animals.appendChild(animals.firstElementChild);
    animals.firstElementChild.remove;
})


/* ------------------------------------ */
/* --- Exercice 4 --- */
let iEx4 = 0;
const colors = ['green', 'blue', 'red']

document.querySelector('#btn4').addEventListener('click', function (event) {
    if (iEx4 !== 0) {
        this.classList.remove(colors[(iEx4 % 3)]);
    }
    iEx4++;
    this.classList.add(colors[iEx4 % 3])
});

/* ------------------------------------ */
/* --- Exercice 5 --- */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // 16 = letters.length
    }
    return color;
}

const ex5Btns = document.querySelectorAll('#ex5 .button')

for (const btn of ex5Btns) {
    btn.addEventListener('pointerenter', function (event) {
        event.target.style.backgroundColor = getRandomColor();
    });
    btn.addEventListener('pointerout', function (event) {
        event.target.style.backgroundColor = '';
    })
}



/* ------------------------------------ */
/* --- Exercice 6 --- */
const txtEx6 = document.querySelector('#ex6-paragraph').outerText.toString()

document.querySelector('#ex6-paragraph').innerText = ''
let j = 0;
const ex6 = setInterval(() => {
    document.querySelector('#ex6-paragraph').innerHTML += txtEx6[j];
    j++;
    if (j >= txtEx6.length) clearInterval(ex6);
}, 50);


/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];

function ex7list(e){
    if(e.target.classList.contains('button')){
        if(taskList.length <= 0) return;
        const newList = document.createElement('li');
        newList.classList.add('task-list-task');
        newList.innerText = taskList.shift();
        document.getElementById('ex7-list').appendChild(newList)
        return
    }
    if(e.target.classList.contains('task-list-task')){
        taskList.push(e.target.innerText);
        e.target.remove();
    }
}

document.getElementById('ex7').addEventListener('click', (event) => ex7list(event) )

/* ------------------------------------ */
/* --- Exercice 8 --- */

function ex8Points(event){
    if(!event.target.classList.contains('button')) return;
    point = parseInt(event.target.dataset.score) - 5;
    if (point > 0){
        event.target.setAttribute('data-score', point);
    }else  event.target.setAttribute('data-score', 0);

    const prog = event.target.dataset.progressId
    document.getElementById(prog).style.width = event.target.dataset.score + '%';
}



document.querySelector('#ex8div').addEventListener('click', (event) => ex8Points(event))


