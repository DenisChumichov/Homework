import api from '../repository';
export function handleDragStart(e) {
  this.style.opacity = '0.4';
}

export function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

export function handleDragEnter(e) {
  this.classList.add('over');
  return true
}

export function handleDragLeave(e) {
  this.classList.remove('over'); 
}

export function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); 
  }
  return false;
}

export function handleDragEnd(e) {
  [].forEach.call(columns, function (columns) {
    columns.classList.remove('over');
  });
}