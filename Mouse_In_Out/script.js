let span = document.querySelector('h2 span');
let img = document.querySelector('img');


img.addEventListener('mouseenter',function(){
    span.textContent ='Ab hoga maut ka khel'
});

img.addEventListener('mouseleave',function(){
    span.textContent ='Khela band'
});