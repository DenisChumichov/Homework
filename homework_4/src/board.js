import { columns } from './columns';
import { cards, addCards, delCards } from './cards';

const fragmentColumns = document.createDocumentFragment()
let ids = columns.map((columns)=>{return columns.id})
ids = ids.concat(cards.map((cards)=>{return cards.id}))

for (let i = 0; i < columns.length; i++) {
  let button = createButton('+', createNewCard, columns[i].id)
  const div = createDiv(columns[i].id, columns[i].title)
  div.append(button)
  fragmentColumns.append(div)
  document.getElementById('box').appendChild(fragmentColumns)
}

for (let i = 0; i < columns.length; i++) {
  for (let j = 0; j < cards.length; j++) {
    if (columns[i].id === cards[j].column){
      drawNewCard(cards[j].id, cards[j].title, columns[i].id)
    }
  }
}

function removeCards(){
  for (let i = 0; i < cards.length; i++){
    if(this.div == cards[i].id){
      cards.splice(i,1)
      delCards()
      document.getElementById(this.div).remove()
      break   
    }
  }
}

function createDiv(id, title){
  const div = document.createElement('div')
  div.id = id
  div.append(title)
  return div
}

function createButton(symbol, func, divId){
  var button = document.createElement('button')
  button.append(symbol)
  button.id = idGenerate()
  button.onclick = func
  button.div = divId
  return button
}

function drawNewCard(id, title, thisid){
  let button = createButton('-', removeCards, id)
  const div = createDiv(id, title)
  div.append(button)
  document.getElementById(thisid).appendChild(div)
}

function createNewCard(){
  addCards(this.div)
  .then(newCard => drawNewCard(newCard.id, newCard.title, this.div))
}

export function idGenerate(){
  let id = Math.max.apply(null, ids) + 1
  ids.push(id)
  return id
}