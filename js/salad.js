
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];


for(const ingredient of ingredients){
   const li = document.createElement('li');
   li.classList.add
   li.innerHTML = `<button type="button" class="button">${ingredient}</button>`;
   document.getElementById('salad-ingredients').appendChild(li);
}

ingredientCounter = 0;

document.getElementById("salad-ingredients").addEventListener('click',(event)=>{
    if(!event.target.classList.contains('button')) return
    if(ingredientCounter >=5)return
    ingredientCounter++;
    document.getElementById('salad-count').innerHTML = ingredientCounter;
    btn = document.createElement('li');
    btn.innerHTML = event.target.parentNode.innerHTML;
    document.getElementById('salad-final').appendChild(btn);
    event.target.parentNode.remove();
}) 

document.getElementById("salad-final").addEventListener('click', (event)=>{
    if(!event.target.classList.contains('button')) return;
    ingredientCounter--;
    document.getElementById('salad-count').innerHTML = ingredientCounter;
    btn = document.createElement('li');
    btn.innerHTML = event.target.parentNode.innerHTML;
    document.getElementById('salad-ingredients').appendChild(btn);
    event.target.parentNode.remove();
})