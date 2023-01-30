const hands = document.querySelectorAll('.hand')
const resultDiv = document.querySelector('.result-text')
const resultImg = document.querySelector('.result-img')
const resultSection = document.querySelector('.result')

let n = 0
const rs = resultImg.src.slice(-1)
rs === '#' ? resultSection.classList.add('none') : resultSection.classList.remove('none')

hands.forEach(() => addEventListener('click', (e) => {
    const click = e.target
    n === 0 ? combat(click.alt) : void (0)
    setTimeout(() => {
        n = 0
    }, 1000
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
            n = 1
        } else {
            resultImg.src = `assets/${cpu[cpuHand]}.png`
            resultDiv.textContent = `Sorry you lost!`
            resultSection.classList.remove('none')
            n = 1
        }
    }
}


//<a href="https://www.vecteezy.com/free-vector/cartoon">Cartoon Vectors by Vecteezy</a>