const title = document.querySelector('.title')
const line1 = `I  Have  Something`.split('')
const line2 = `For  You  Loser`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexDirection = 'column'
title.style.alignItems = 'center'
title.style.justifyContent = 'center'
title.style.gap = '1rem'

// Create first line
const firstLine = document.createElement('div')
firstLine.style.display = 'flex'
firstLine.style.gap = '0.5rem'
firstLine.style.justifyContent = 'center'

for (let index = 0; index < line1.length; index++) {
  if (line1[index] !== ' ') {
    firstLine.innerHTML += `<span>${line1[index]}</span>`
  } else {
    firstLine.innerHTML += `<span style='width: 1rem'></span>`
  }
}

// Create second line
const secondLine = document.createElement('div')
secondLine.style.display = 'flex'
secondLine.style.gap = '0.5rem'
secondLine.style.justifyContent = 'center'

for (let index = 0; index < line2.length; index++) {
  if (line2[index] !== ' ') {
    secondLine.innerHTML += `<span>${line2[index]}</span>`
  } else {
    secondLine.innerHTML += `<span style='width: 1rem'></span>`
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