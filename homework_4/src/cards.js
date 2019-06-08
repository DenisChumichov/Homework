import {idGenerate} from './board';
export function getCards(){
    const cards = [
        {
          id: 15,
          title: 'Зробити домашку',
          column: 7,
        },
        {
          id: 9,
          title: 'Встановити Node.js',
          column: 8,
        },
      ];
      return cards     
}
export const cards = JSON.parse(window.localStorage.getItem('cards')) || localStorage.setItem("cards", JSON.stringify(getCards()))

export function addCards(thisid){
  let text = prompt()
  if (!text){
    alert("введите коректное значение")
    return false
  }
  cards[cards.length] = {
    id: idGenerate(),
    title: text,
    column: +thisid
  }
  window.localStorage.setItem('cards', JSON.stringify(cards));
  return Promise.resolve(cards[cards.length - 1]);
}

export function delCards(){
  window.localStorage.setItem('cards', JSON.stringify(cards));
}