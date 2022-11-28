import './styles/main.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Create a class property without a constructor
class Game {
  name = 'Violin Charades'
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')

console.log(p);