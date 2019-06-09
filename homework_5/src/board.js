import {createCard, removeCard, updateCard} from './cards';
import api from './repository'
import {idGenerate} from './services/utils'

const fragmentColumns = document.createDocumentFragment()

export function reload(){
document.getElementById('box').innerHTML = "";
getData().then(([columns, cards]) => {
console.log(columns, cards)
let ids = columns.map((columns)=>{return columns.id})

ids = ids.concat(cards.map((cards)=>{return cards.id}))
  for (let i = 0; i < columns.length; i++) {
    let button = createButton('+', () => createCard(columns[i].id), columns[i].id)
    const div = createDiv(columns[i].id, columns[i].title)
    div.append(button)
    fragmentColumns.append(div)
    document.getElementById('box').appendChild(fragmentColumns)
  }
for (let i = 0; i < columns.length; i++) {
  for (let j = 0; j < cards.length; j++) {
    if (columns[i].id === cards[j].columnId){
      drawNewCard(cards[j].id, cards[j].title, columns[i].id)
    }
  }
}

function createDiv(id, title){
  const div = document.createElement('div')
  div.id = id
  div.contentEditable = true
  let divOnclickId = 0
  let string = ""
  div.onclick = function(event){
    divOnclickId = event.target.id
    string = document.getElementById(divOnclickId).textContent
  }
  div.onkeydown = function(){
    updateCard(divOnclickId, div, string)
  }
  div.append(title)
  return div
}

function createButton(symbol, func, divId){
  const id = idGenerate(ids)
  var button = document.createElement('button')
  button.append(symbol)
  button.id = id
  ids.push(id)
  button.onclick = func
  button.div = divId
  return button
}

function drawNewCard(id, title, thisid){
  let button = createButton('-', () => removeCard(id), id)
  const div = createDiv(id, title)
  div.append(button)
  document.getElementById(thisid).appendChild(div)
}
})
}
reload()
export function getData(){
  return Promise.all([api.getColumns(), api.getCards()])
}

