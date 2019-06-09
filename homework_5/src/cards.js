import api from './repository';
import {reload} from './board'

export function removeCard(id){
  api.deleteCard(id).then(() => {
    reload()
  })
}

export function createCard(columnId){
  let title = prompt()
  if (!title){
    alert("введите коректное значение")
    return Promise.reject()
  }
  api.addCard({columnId, title}).then(() => {
    reload()
  })
}

export function updateCard(id , div, string){
  notifications.textContent = "Для сохранения изменений нажмите Enter. Для отмены изменений нажмите Esc."
  if (event.keyCode == 13){
    let title = document.getElementById(id).textContent
    title = title.substring(0, title.length - 1)
    id = Number(id)
    api.updateCard(id, {title})
    notifications.textContent = ""
    div.contentEditable = false
    div.contentEditable = true
    return false
  }
  if (event.which == 27){
    console.log(string)
    document.getElementById(id).childNodes[0].nodeValue = string.substring(0, string.length - 1)
    notifications.textContent = ""
    div.contentEditable = false
    div.contentEditable = true
  }
}
