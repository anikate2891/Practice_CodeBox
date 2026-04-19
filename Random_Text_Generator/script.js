let btn = document.querySelector('.btn');
let main = document.querySelector('main')

let arr =[
    "Highly focused",
    "Calm mindset",
    "Quick learner",
    "Strong logic",
    "Reliable always",
    "Consistent effort",
    "Problem solver",
    "Growth oriented",
]

btn.addEventListener('click', function(){
    let x = Math.floor(Math.random()*80);
    let y = Math.floor(Math.random()*80);
    let r = Math.floor(Math.random()*361);
    let s = 1+ Math.floor(Math.random()*2);


    // let c2 = Math.floor(Math.random()*256);
    let data = Math.floor(Math.random()*arr.length);


    let h1 = document.createElement('h1');
    h1.textContent = arr[data];
    h1.style.color = 'hotpink'

    
    
    h1.style.position = 'absolute'
    h1.style.top = x +'%';
    h1.style.left = y +'%';
    h1.style.rotate = r +'deg'
    h1.style.scale = s;

    
    main.appendChild(h1);

});