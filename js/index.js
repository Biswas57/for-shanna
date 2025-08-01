const title = document.querySelector('.title')
const line1 = `I  Have  Something`.split('')
const line2 = `For  You  Loser`.split('')

// Configure title for better responsive layout
title.style.gap = '1rem'

// Create first line
const firstLine = document.createElement('div')
firstLine.style.display = 'flex'
firstLine.style.flexWrap = 'wrap'
firstLine.style.gap = '0.3rem'
firstLine.style.justifyContent = 'center'
firstLine.style.alignItems = 'center'
firstLine.style.lineHeight = '1.2'

for (let index = 0; index < line1.length; index++) {
  if (line1[index] !== ' ') {
    const span = document.createElement('span')
    span.textContent = line1[index]
    span.style.fontSize = 'clamp(2.5rem, 8vw, 4rem)'
    span.style.display = 'inline-block'
    firstLine.appendChild(span)
  } else {
    const span = document.createElement('span')
    span.style.width = 'clamp(0.3rem, 2vw, 0.8rem)'
    span.style.display = 'inline-block'
    firstLine.appendChild(span)
  }
}

// Create second line
const secondLine = document.createElement('div')
secondLine.style.display = 'flex'
secondLine.style.flexWrap = 'wrap'
secondLine.style.gap = '0.3rem'
secondLine.style.justifyContent = 'center'
secondLine.style.alignItems = 'center'
secondLine.style.lineHeight = '1.2'

for (let index = 0; index < line2.length; index++) {
  if (line2[index] !== ' ') {
    const span = document.createElement('span')
    span.textContent = line2[index]
    span.style.fontSize = 'clamp(2.5rem, 8vw, 4rem)'
    span.style.display = 'inline-block'
    secondLine.appendChild(span)
  } else {
    const span = document.createElement('span')
    span.style.width = 'clamp(0.3rem, 2vw, 0.8rem)'
    span.style.display = 'inline-block'
    secondLine.appendChild(span)
  }
}

// Add both lines to title
title.appendChild(firstLine)
title.appendChild(secondLine)

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});