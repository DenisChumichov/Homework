const columns = JSON.parse(window.localStorage.getItem('columns'))
const cards = JSON.parse(window.localStorage.getItem('cards'))
const fragmentColumns = document.createDocumentFragment()

for (let i = 0; i < columns.length; i++) {
  let button = createButton('+', columns[i].id, createNewCard)
  fragmentColumns.append(createDiv(columns[i].id, columns[i].title, button))
  document.getElementById('box').appendChild(fragmentColumns)
}

for (let i = 0; i < columns.length; i++) {
const fragmentCards = document.createDocumentFragment()

  for (let j = 0; j < cards.length; j++) {
    if (columns[i].id === cards[j].column){

      let button = createButton('-', cards[j].id, delCards)
      fragmentCards.append(createDiv(cards[j].id, cards[j].title, button))   

    }
  }
  document.getElementById(columns[i].id).appendChild(fragmentCards)
  
}

function addCards(thisid){
  let id = 0
  let flag = false
  while(flag != true){
    flag = true
    for (let i = 0; i < cards.length; i++) {
      if (id === cards[i].id || id === cards[i].column){
        flag = false
        id++
      }
    }
  }
  cards[cards.length] = {
    id: id,
    title: prompt(),
    column: +thisid
  }
  window.localStorage.setItem('cards', JSON.stringify(cards));
  return Promise.resolve()
}

function delCards(){
  for (i = 0; i < cards.length; i++){
    if(this.id == cards[i].id){
      cards.splice(i,1)
      window.localStorage.setItem('cards', JSON.stringify(cards));
      document.getElementById(this.id).remove()
      break   
    }
  }
}

function createDiv(id, title, createButon){
  const div = document.createElement('div')
  div.id = id
  div.append(title)
  div.append(createButon)
  return div
}

function createButton(symbol, id, func){
  var button = document.createElement('button')
  button.append(symbol)
  button.id = id
  button.onclick = func
  return button
}

function DrawNewCard(id, title, thisid){
  const fragmentNewCards = document.createDocumentFragment()
  let button = createButton('-', id, delCards)
  fragmentNewCards.append(createDiv(id, title, button))
  document.getElementById(thisid).appendChild(fragmentNewCards)
}

function createNewCard(){
  addCards(this.id)
  .then(DrawNewCard(cards[cards.length - 1].id, cards[cards.length - 1].title, this.id))
}