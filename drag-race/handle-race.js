const handleRace = (()=>{

const _buttonStop = document.querySelector('#stop')
const _buttonStart = document.querySelector('#start')
const _nameInput = document.querySelector('input[type="name"]')
const _form = document.querySelector('form')
const _ul = document.querySelector('ul')

let _scores = []

const _VISIBLE = '--visible'

let _name = '';

_buttonStop.addEventListener('click',() => {
    const value = chronometer.stop()
    chronometer.clearAll()
    insertResultsOnHtml(_ul,scoreList({name:_name,score:value}))
    reverseEnabledButton(_buttonStop,_buttonStart)
    _buttonStart.classList.remove(_VISIBLE)
    _buttonStop.classList.remove(_VISIBLE)
    saveHighScore()
})

_buttonStart.addEventListener('click',() => {
    chronometer.start()
    reverseEnabledButton(_buttonStart,_buttonStop)
})

_form.addEventListener('submit', (evt) => {
    _buttonStart.classList.add(_VISIBLE)
    _buttonStop.classList.add(_VISIBLE)
    evt.preventDefault()
    return _name = _nameInput.value
})

const insertResultsOnHtml = (target,scores) => {
    let ul = document.createElement('ul')
    scores.forEach((element) => {
    let li = document.createElement('li')
    let timeFormated = convertMillisToMinutes(element.score)
        li.innerText = `${element.name} || time: ${timeFormated} millis`
        ul.appendChild(li)
    })
    target.innerText = ''
    target.appendChild(ul)
}

const reverseEnabledButton = (button1,button2) => {
    button1.disabled = !button1.disabled
    button2.disabled = !button2.disabled
}

const scoreList = (value) => {
    _scores = [..._scores,value]
    return _scores.sort((a,b)=> a.score-b.score)
}

const convertMillisToMinutes = (valueInMillis) => {
    let time = valueInMillis
    min = Math.floor((time/1000/60)),
    sec = Math.floor((time/1000) % 60);
    millis = Math.floor(time%1000)
    return `${min}: ${sec}: ${millis}`
}

const setHighScore = () => {
    let highScore = _scores.reduce((acc,curr)=> {
        return acc.score < curr.score? acc : curr
    }
    ,{})
    return highScore
}

const saveHighScore = async() => {
    const savedData = JSON.parse(localStorage.getItem('highScore'));
    const sessionHighScore = setHighScore()

    if(savedData){
        if (savedData.score > sessionHighScore.score ){
            return localStorage.setItem('highScore',JSON.stringify(sessionHighScore))
        } 
    }
    else{
            return localStorage.setItem('highScore',JSON.stringify(sessionHighScore))
    } 
}
})()