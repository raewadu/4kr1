const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return console.log(regExp.test(str));
    
}
containsOnlyDigits("12345")
containsOnlyDigits("12a45")

setInterval(()=>{
    console.log("Прошла секунда");
}, 1000
)
const count = () => {
    let i = 0;
    const interval = setInterval(() => {
        if (i<10) {
            i++
            console.log(i);
        }
    }, 1000);
    if(i==10) {
        clearInterval(interval)
    }
}

count()

const startBtn=document.querySelector(".start")
const stopBtn=document.querySelector(".stop")
const resetBtn=document.querySelector(".reset")
const inputTimer=document.querySelector(".timer-input")
const inputValue=document.querySelector(".timer-value")

let interval = null
let seconds = 0

startBtn.addEventListener('click', () => {
  if (interval) return;
  if (inputTimer.value=='') return

  if (seconds === 0) { 
    seconds = Number(inputTimer.value)
    inputValue.innerText = seconds
    inputTimer.value = ""
  }

  interval = setInterval(() => {
    seconds--
    inputValue.innerText = seconds

    if (seconds <= 0) {
      clearInterval(interval)
      interval = null
    }
  }, 1000)
})

stopBtn.addEventListener('click', ()=>{
  clearInterval(interval)
  interval=null
})

resetBtn.addEventListener('click',()=>{
  clearInterval(interval)
  interval=null
  seconds=0
  inputValue.innerText=seconds
})

const block = document.querySelector('.block')

block.addEventListener(('click'), ()=>{
    block.classList.toggle("active")
})

const request = new XMLHttpRequest
request.open('GET','./main.json')
request.setRequestHeader('Content-Type', 'application/json')
request.send()

request.onload = () => {
    const response = JSON.parse(request.response)
    console.log(response);
    
}
const requestCard = new XMLHttpRequest
requestCard.open('GET','./second.json')
requestCard.setRequestHeader('Content-Type', 'application/json')
requestCard.send()
let users = [];
requestCard.onload=()=>{
    users=JSON.parse(requestCard.response)
}
const loginValue = document.querySelector('#loginInput')
const checkBtn = document.querySelector('#checkBtn')
const userCard = document.querySelector('#userCard')
const message = document.querySelector('#message')

checkBtn.addEventListener('click', () => {
    const login = loginInput.value.trim();

    userCard.innerHTML = "";
    message.innerText = "";

    if (!login) {
        message.innerText = "Введите логин";
        return;
    }

    const user = users.find(u => u.login === login);

    if (user) {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${user.login}</h3>
            <p>Role: ${user.role}</p>
            <p>Email: ${user.email}</p>
        `;
        userCard.appendChild(card);
    } else {
        message.innerText = "Пользователь не найден";
    }
});