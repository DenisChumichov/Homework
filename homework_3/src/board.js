import { getCards } from './cards.js'
import { getColumns } from './columns.js'
//Забить функцию в переменную
const columns = getColumns()
const cards = getCards()
const fragment = document.createDocumentFragment()
for (let i = 0; i < columns.length; i++) {
  const div = document.createElement('div')
  div.id = i
  div.append(columns[i].title)
  fragment.append(div)
}
document.getElementById('box').appendChild(fragment)


for (let i = 0; i < columns.length; i++) {
const fragment1 = document.createDocumentFragment()
  for (let j = 0; j < cards.length; j++) {
    if (columns[i].id === cards[j].column){
      const div = document.createElement('div')
      div.id = cards[j].id
      //console.log(cards[j].title)
      div.append(cards[j].title)
      fragment1.append(div)
    }
  }
  document.getElementById(i).appendChild(fragment1)
}