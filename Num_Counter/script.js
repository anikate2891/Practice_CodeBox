let h2 = document.querySelector('h2');

let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let reset = document.querySelector('#reset')
let count = 0;

plus.addEventListener('click', function(){
    count++;
    h2.textContent = `${count}`
})
minus.addEventListener('click', function(){
    if (count <= 0) console.error('Invalid Number');
    else{
        count--;
        h2.textContent = `${count}`
    }  
})
reset.addEventListener('click', function(){
    count = 0;
    h2.textContent = `${count}`
})