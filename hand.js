const hands = document.querySelectorAll('.hand')
const resultDiv = document.querySelector('.result-text')
const resultImg = document.querySelector('.result-img')
const resultSection = document.querySelector('.result')
const p1Score = document.querySelector('.p1-score')
const cpuScore = document.querySelector('.cpu-score')

//counters
let p1Counter = 0
let cpuCounter = 0
let n = 0

//checking img
const rs = resultImg.src.slice(-1)
rs === '#' ? resultSection.classList.add('none') : resultSection.classList.remove('none')

//click loop
hands.forEach(() => addEventListener('click', (e) => {
    const click = e.target
    n === 0 ? combat(click.alt) : void (0)
    setTimeout(() => {
        n = 0
    }, 200
    )
}))

function combat(hand) {

    const array = ['paper', 'rock', 'scisor']
    const cpu = ['rock', 'scisor', 'paper']
    let cpuHand = Math.floor(Math.random() * 3)
    const result = array[cpuHand]

    if (hand !== undefined) {
        if (hand === result) {
            resultImg.src = `assets/${cpu[cpuHand]}.png`
            resultDiv.textContent = `Congrats you won!`
            resultSection.classList.remove('none')
            p1Counter += 1
            p1Score.textContent = p1Counter
            n = 1
        } else {
            resultImg.src = `assets/${cpu[cpuHand]}.png`
            resultDiv.textContent = `Sorry you lost!`
            resultSection.classList.remove('none')
            cpuCounter += 1
            cpuScore.textContent = cpuCounter
            n = 1
        }
    }
}


//<a href="https://www.vecteezy.com/free-vector/cartoon">Cartoon Vectors by Vecteezy</a>