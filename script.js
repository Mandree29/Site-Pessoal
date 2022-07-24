var h = document.querySelector('.hamburger')
var m = document.querySelector('.nada')
var b = document.getElementsByTagName("body")[0]

console.log(m.getAttribute('class'))
h.addEventListener('click', (e)=>{
    m.classList.remove('nada')
    m.classList.add('menu')
    console.log(m.getAttribute('class'))
    mouseTrack()

})


function mouseTrack(){
    window.addEventListener('mousemove', (e)=>{
        let x = e.x
        if (x > 180){
            m.classList.remove('menu')
            m.classList.add('nada')
        }
 
    })

}