const hamburg = document.getElementById('hamburg');
const menu = document.getElementById('menu');

hamburg.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        hamburg.innerHTML = `<img src="images/icon-close.svg" alt="" class="w-8" >`;
    }else{
        menu.classList.add('hidden');
    }
})