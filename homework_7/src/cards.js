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
  return api.addCard({columnId, title});
}

export function replaceCard(columnId, title){

  return api.addCard({columnId, title})
}

export function updateCard(id , div, string){
  notifications.textContent = "Для сохранения изменений нажмите Enter. Для отмены изменений нажмите Esc."
  if (event.keyCode == 13){
    let title = document.getElementById(id).getElementsByTagName("span")[0].innerText
    console.log(title)
    id = Number(id)
    api.updateCard(id, {title})
    notifications.textContent = ""
    div.contentEditable = false
    div.contentEditable = true
    return false
  }
  if (event.which == 27){
    document.getElementById(id).childNodes[0].nodeValue = document.getElementsByClassName("technical").textContent

    notifications.textContent = ""
    div.contentEditable = false
    div.contentEditable = true
  }
}
