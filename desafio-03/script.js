const nums = document.querySelectorAll('.btn-num')
const btns = document.querySelectorAll('button')
const display = document.querySelector('.display')
const operations = document.querySelectorAll('.btn-op')

btns.forEach(num => {
  num.addEventListener('click', insert)
  num.addEventListener('click', function(e) {
    e.preventDefault
    num.classList.remove("animated")
    num.classList.add('animated')
    navigator.vibrate(100);
  }, false)
})

operations.forEach(ops => {
  ops.addEventListener('click', insert)
})

function insert(event) {
  display.innerHTML += event.target.value
}

function clean() {
  display.innerHTML = '0'
}

function result() {
  if(display.innerHTML) {
    display.innerHTML = eval(display.innerHTML)
  } else {
    console.log(false)
  }
}