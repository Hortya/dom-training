function risingImg(event){
    if(!event.target.classList.contains('thumbs-img')) return
    document.getElementById('gallery-title').innerText = event.target.dataset.title;
    document.getElementById('gallery-description').innerText = event.target.dataset.description;

    document.getElementById('gallery-picture').setAttribute('src', event.target.getAttribute('src'));
    document.getElementById('gallery-picture').setAttribute('alt', event.target.getAttribute('alt'));
}


document.getElementById('gallery-thumbs').addEventListener('mouseover', (event)=>{
    risingImg(event)
})