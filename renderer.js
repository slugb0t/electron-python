const zerorpc = require("zerorpc")
const LargeHeartBeat = 60 * 60 * 24 * 30 * 12; //1 year
clientOptions = {
  "heartbeatInterval": LargeHeartBeat,
}
let client = new zerorpc.Client(clientOptions)

client.connect("tcp://127.0.0.1:4242")

let message = document.querySelector('#serverMessage');
client.invoke("echo", "server ready", (error, res) => {
  if(error || res !== 'server ready') {
    message.textContent = error;
    console.error(error)
  } else {
    message.textContent = res;
    console.log("server is ready")
  }
})

let input1 = document.querySelector('#formula1');
let input2 = document.querySelector('#formula2')
let result = document.querySelector('#result')
let button = document.querySelector('#solve')

button.addEventListener('click', () => {
  client.invoke("calc", (input1.value + " " + input2.value), (error, res) => {
    if(error) {
      console.error(error)
    } else {
      result.textContent = res
      console.log(input1.value + " " + input2.value)
    }
  })
})

message.dispatchEvent(new Event('serverMessage'))
result.dispatchEvent(new Event('result'))
