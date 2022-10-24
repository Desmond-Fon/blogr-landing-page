const hamburg = document.getElementById('hamburg');
const menu = document.getElementById('menu');

hamburg.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }

    if (hamburg.getAttribute("src") == "images/icon-hamburger.svg") {
              hamburg.src = "images/icon-close.svg";
            } else {
              hamburg.src = "images/icon-hamburger.svg";
            }
})