let btn = document.querySelector('.btn')
let h1 = document.querySelector('h1')

btn.addEventListener('click', function(){
    h1.textContent = "Location loading.."
    setTimeout(function(){
        h1.textContent = 'Namaste Australia'
    },2000)
})

