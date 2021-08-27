const zerorpc = require("zerorpc")
let client = new zerorpc.Client()

client.connect("tcp://127.0.0.1:4242")

client.invoke("echo", "server ready", (error, res) => {
  if(error || res !== 'server ready') {
    console.error(error)
  } else {
    console.log("server is ready")
  }
})

let input1 = document.querySelector('#formula1');
let input2 = document.querySelector('#formula2')
let result = document.querySelector('#result')
let button = document.querySelector('#solve')

button.addEventListener('click', () => {
  client.invoke("calc", (input1.value + input2.value), (error, res) => {
    if(error) {
      console.error(error)
    } else {
      result.textContent = res
    }
  })
})

input1.dispatchEvent(new Event('input'))
