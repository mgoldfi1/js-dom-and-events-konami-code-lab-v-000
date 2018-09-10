const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body')
let index = 0
function init(e) {
  return body.addEventListener('keydown', function(e){return console.log(e.which) })
  
}
