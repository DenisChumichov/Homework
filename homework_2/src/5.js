// Задача №5 
let users = {
  1: 'Mihail',
  2: 'Marina',
  3: 'Andrew',
  4: 'Ilya'
}
let obb = {}
function IsEpty(obj){
    if(Object.keys(obj).length === 0){
      return true
    }   
    else
      return false
}
let bool = IsEpty(obb)
console.log(bool);