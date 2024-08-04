import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const btn = document.getElementById('btn')
btn.addEventListener('click',funcb)

const i1 = document.getElementById('i1')
const i2 = document.getElementById('i2')
const i3 = document.getElementById('i3')
function funcb(e){
    let nv=i1.value
let ev=i2.value
let mv=i3.value
let obj={
    name:nv,
    mail:ev,
    message:mv
}
    e.preventDefault()
    console.log(obj)
    Toastify({
        text: "You send a letter",
        duration: 1000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        offset: {
          x: 650, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          width:"160px",
          radius:"10px",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}



