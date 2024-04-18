
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];


for(const ingredient of ingredients){
   const li = document.createElement('li');
   li.classList.add
   li.innerHTML = `<button type="button" class="button">${ingredient}</button>`;
   document.getElementById('salad-ingredients').appendChild(li);
}

ingredientCounter = 0;

document.getElementById("salad-ingredients").addEventListener('click',(event)=>{
    if(ingredientCounter >=5)return;
    moveInAndOut("salad-final", event);
    ingredientCounter++;
    document.getElementById('salad-count').innerHTML = ingredientCounter;
}) 

document.getElementById("salad-final").addEventListener('click', (event)=>{
    moveInAndOut("salad-ingredients", event);
    ingredientCounter--;
    document.getElementById('salad-count').innerHTML = ingredientCounter;
})


/**
 * move the element to an ohter 'out' element
 * @param {string} out the location where you want the element to move in
 * @param {envent} event the event
 */
function moveInAndOut(out, event){
    if(!event.target.classList.contains('button')) return;
    btn = document.createElement('li');
    btn.innerHTML = event.target.parentNode.innerHTML;
    document.getElementById(out).appendChild(btn);
    event.target.parentNode.remove();
}