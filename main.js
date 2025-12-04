import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Elevator</h1>
    <div class="card">
      <span id="counter">Floor is 0</span>
      <button id="counter_up" type="button">Go up a floor</button>
      <button id="counter_down" type="button">Go down a floor</button>
    </div>
    <div class="shaft"></div>
    <div id="elevator_box"></div>
  </div>
`

setupCounter(document.querySelector('#current_floor'))
