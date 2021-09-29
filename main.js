// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelector('#modal').classList.add("hidden")

const like = document.querySelectorAll(".like-glyph")

like.forEach(heart => heart.addEventListener('click', () => {
  mimicServerCall()
  .then(() => {
    if (heart.textContent === EMPTY_HEART) {
      heart.classList.add("activated-heart")
      heart.textContent === FULL_HEART
    } else if (heart.textContent === FULL_HEART) {
      heart.classList.remove("activated-heart")
      heart.textContent === EMPTY_HEART
    }
  })
  .catch(() => {
    document.querySelector('#modal').classList.remove = "hidden"
    setTimeout(() => {document.querySelector('#modal').classList.add("hidden")}, 3000)})
  })
)



// like.forEach(heart => heart.addEventListener('click', () => {
//   if (heart.textContent === EMPTY_HEART) {
//     mimicServerCall()
//     .then(() => {
//       heart.className = "activated-heart"
//       heart.textContent === FULL_HEART
//     })
//     .catch(() => {
//       document.querySelector('#modal').classList.remove = "hidden"
//       setTimeout(() => {document.querySelector('#modal').classList.add("hidden")}, 3000)})
//   } else if (heart.textContent === FULL_HEART) {
//       heart.textContent = EMPTY_HEART
//       heart.classList.remove("activated-heart")
//   }
// })
// )





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
