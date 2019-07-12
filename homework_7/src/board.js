import {createCard, removeCard, updateCard, replaceCard} from './cards';
import api from './repository'
import * as dragDrop from './services/utils'

const fragmentColumns = document.createDocumentFragment()

export function reload(){
document.getElementById('box').innerHTML = "";
api.getData().then(([columns, cards]) => {
//console.log(columns, cards)
  for (let i = 0; i < columns.length; i++) {
    let button = createButton('+', () => createCard(columns[i].id).then(reload), columns[i].id)
    const div = createDiv(columns[i].id, columns[i].title)
    div.addEventListener('dragenter', dragDrop.handleDragEnter, false);
    div.addEventListener('dragover', dragDrop.handleDragOver, false);
    div.addEventListener('dragleave', dragDrop.handleDragLeave, false);
    div.addEventListener('drop', dragDrop.handleDrop, false);
    div.addEventListener('dragend', handleDragEnd, false);
    div.append(button)
    fragmentColumns.append(div)
    document.getElementById('box').appendChild(fragmentColumns)
  }

for (let j = 0; j < cards.length; j++) {
  drawNewCard(cards[j].id, cards[j].title, cards[j].columnId)
}

function createDiv(id, title){
  const div = document.createElement('div')
  div.id = id
  const text = document.createElement('span')
  text.append(title)
  div.append(text)
  return div
}

function renderCard(id, render, title){
    const content = render(id, title)
    content.contentEditable = true
    content.draggable = true
    content.addEventListener('dragstart', dragDrop.handleDragStart, false);
    let divOnclickId = 0
    let string = ""
    content.onclick = function(event){
      divOnclickId = event.target.id
      string = document.getElementById(divOnclickId).textContent
    }
    content.onkeydown = function(){
      document.getElementsByClassName("technical").textContent += event.key
      updateCard(divOnclickId, content, string)
    }
    return content
}

function createButton(symbol, func, divId){
  var button = document.createElement('button')
  button.append(symbol)
  button.onclick = func
  button.div = divId
  return button
}

function drawNewCard(id, title, thisid){
  let button = createButton('-', () => removeCard(id), id)
  const div = renderCard(id, createDiv, title)
  console.log(div)
  div.append(button)
  document.getElementById(thisid).appendChild(div)
}

function handleDragEnd(e) {
  if (document.querySelectorAll( ":hover" ).length === 4){
    console.log(document.querySelectorAll( ":hover" )[3].id)
    cards.map((index) =>{
      if (index.id == e.target.id){
        replaceCard(document.querySelectorAll( ":hover" )[3].id, index.title)
        removeCard(e.target.id)
      }
    })
  }
  else{
    e.target.style.opacity = '1';
  }
}

})
}
reload()

