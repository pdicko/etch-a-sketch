

document.addEventListener('DOMContentLoaded', () => {

  const customizeButton = document.querySelector('.customize-button');
  const modalPrompt = document.querySelector('.modal-prompt');

  customizeButton.addEventListener('click', () => {
    modalPrompt.showModal();
  })

  const promptButton = document.querySelector('.prompt-button');

  promptButton.addEventListener('click', () => {
    const gridSizeInput = document.querySelector('.grid-size-input')
    const customGridSize = gridSizeInput.value;

    loadGrid(customGridSize);
  })

  loadGrid(16);
});

function loadGrid(size) {

  const gridSize = size;
  const  grid = document.querySelector('.grid');
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (i=1; i<= (gridSize ** 2); i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.toggle('box');
    newDiv.id = `box${i}`;
    grid.appendChild(newDiv);
  }

  grid.addEventListener('mouseover', (e) => {
    if (e.target.className === 'box') {
      const box = e.target;
      const boxStyle = getComputedStyle(box);
      const currentBackgroundColor = boxStyle.getPropertyValue('background-color');
      if (currentBackgroundColor === 'rgb(255, 255, 255)') {
        box.style.backgroundColor = generateColor();
      } else {
        const currentRGB = currentBackgroundColor.slice(0, -5);
        const currentAlpha = currentBackgroundColor.slice(-4, -1);

        if ((currentAlpha * 10) < 10) {
          const newAlpha = ((currentAlpha * 10) + 1) / 10;
          box.style.backgroundColor = `${currentRGB}${newAlpha}`;
        }
        
      }
    }
  })
}

function generateColor () {

  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const alpha = .1;

  const rgbaValue = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return rgbaValue;

}

