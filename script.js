



let panel = document.querySelectorAll('.panel')



panel.forEach(element => {
    
    element.addEventListener('click', () => {

            element.classList.toggle("open-active")
            element.classList.toggle("open")

})
});

