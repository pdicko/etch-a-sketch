

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
    grid.appendChild(newDiv);
  }

  grid.addEventListener('mouseover', (e) => {
    if (e.target.className === 'box') {
      e.target.classList.toggle('box-filled');
    }
  })
}

