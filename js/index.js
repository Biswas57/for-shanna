const title = document.querySelector('.title')
const text = `I Have Something For You Loser`
const words = text.split(' ')

// Configure title for better responsive layout
title.style.gap = '0.5rem'

// Create container for all words
const textContainer = document.createElement('div')
textContainer.style.display = 'flex'
textContainer.style.flexWrap = 'wrap'
textContainer.style.gap = 'clamp(1rem, 3vw, 1.8rem)' // Space between word containers
textContainer.style.justifyContent = 'center'
textContainer.style.alignItems = 'center'
textContainer.style.lineHeight = '1.2'

// Process each word and split into individual letters
words.forEach((word, wordIndex) => {
  // Create a container for each word to keep letters together
  const wordContainer = document.createElement('div')
  wordContainer.style.display = 'flex'
  wordContainer.style.flexWrap = 'nowrap' // Prevent letters from wrapping within a word
  wordContainer.style.gap = '0.02rem' // Minimal space between letters
  wordContainer.style.alignItems = 'center'

  // Split word into individual letters
  const letters = word.split('')

  letters.forEach((letter, letterIndex) => {
    const span = document.createElement('span')
    span.textContent = letter
    span.style.fontSize = 'clamp(2rem, 6vw, 3.2rem)' // Smaller font size
    span.style.display = 'inline-block'
    wordContainer.appendChild(span)
  })

  // Add the word container to the main container
  textContainer.appendChild(wordContainer)
})

// Add container to title
title.appendChild(textContainer)

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});