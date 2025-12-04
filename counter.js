export function setupCounter(element) {
  if (!element) return;

  let currentFloor = 0;
  const maxFloor = 30;   
  const floorHeight = 10; 

  const floorDisplay = document.querySelector('#current_floor');
  const elevatorBox = document.querySelector('#elevator_box');

  const counter_up = document.querySelector('#counter_up');
  const counter_down = document.querySelector('#counter_down');

  function updateElevator() {
    floorDisplay.textContent = `Floor is ${currentFloor}`;
    elevatorBox.style.bottom = `${currentFloor * floorHeight}px`;
  }

  counter_up.addEventListener('click', () => {
    if (currentFloor < maxFloor) {
      currentFloor++;
      updateElevator();
    }
  });

  counter_down.addEventListener('click', () => {
    if (currentFloor > 0) {
      currentFloor--;
      updateElevator();
    }
  });

  updateElevator();
}

// Initialize
setupCounter(document.querySelector('#current_floor'));
