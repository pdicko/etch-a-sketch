

document.addEventListener('DOMContentLoaded', loadGrid);

function loadGrid() {
  const  grid = document.querySelector('.grid');

  for (i=1; i<=256; i++) {
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

