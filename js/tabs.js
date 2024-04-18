
document.querySelector('#tabs-links').addEventListener('click', (event) => {
    if (!event.target.classList.contains(".tabs-link"));
    for (const link of document.querySelectorAll('.tabs-link')) {
        link.classList.remove("active");
        document.getElementById(link.dataset.tab).classList.remove("active");
    }
    event.target.classList.add('active');
    document.getElementById(event.target.dataset.tab).classList.add("active");
})