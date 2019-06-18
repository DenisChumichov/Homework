export class Hamburger{
  static get SIZE_SMALL(){
    return ('small')  
  }
  static get SIZE_BIG(){
    return ('big') 
  }
  static get SAUCE_MAYO(){
    return ('mayo')
  }
  static get SAUCE_MUSTARD(){
    return ('mustard') 
  }
  constructor(size){
    if (size === undefined){
      throw new Error('Введите коректный размер бургера');
    }
    else{
       this.size = size
    }
  }
  addSauce(sauce){
    if (sauce === undefined){
      throw new Error('Введите коректный соус');
    }
    else{
      this[sauce] = true
    }
  }
  getPrice(){
    let prices = {
      small: 30,
      big: 50,
      mayo: 5,
      mustard: 5
    }
    let price = 0
    if (this.size === "small"){
      price += prices.small
    }
    if (this.size === "big"){
      price += prices.big
    }
    if (this.mayo){
      price += prices.mayo
    }
    if (this.mustard){
      price += prices.mustard
    }
    console.log('Цена гамбургера: ' + price)
  }
  removeSauce(sauce){
    if (sauce === undefined){
      throw new Error('Введите коректный соус');
    }
    this[sauce] = false
  }
  getCalories(){
    let calories = {
      small: 200,
      big: 320,
      mayo: 30,
      mustard: 35
    }
    let kcalories = 0
    if (this.size === "small"){
      kcalories += calories.small
    }
    if (this.size === "big"){
      kcalories += calories.big
    }
    if (this.mayo){
      kcalories += calories.mayo
    }
    if (this.mustard){
      kcalories += calories.mustard
    }
    console.log('Калорийность гамбургера: ' + kcalories)
  }
}

export class Сheeseburger extends Hamburger{
  static get SAUCE_TARTAR(){
    return ('tartar') 
  }
  getPrice(){
    let prices = {
      small: 40,
      big: 70,
      mayo: 5,
      mustard: 5,
      tartar: 7
    }
    let price = 0
    if (this.size === "small"){
      price += prices.small
    }
    if (this.size === "big"){
      price += prices.big
    }
    if (this.mayo){
      price += prices.mayo
    }
    if (this.mustard){
      price += prices.mustard
    }
    if (this.tartar){
      price += prices.tartar
    }
    console.log('Цена чизбургера: ' + price)
  }
  getCalories(){
    let calories = {
      small: 250,
      big: 400,
      mayo: 30,
      mustard: 35,
      tartar: 37
    }
    let kcalories = 0
    if (this.size === "small"){
      kcalories += calories.small
    }
    if (this.size === "big"){
      kcalories += calories.big
    }
    if (this.mayo){
      kcalories += calories.mayo
    }
    if (this.mustard){
      kcalories += calories.mustard
    }
    if (this.tartar){
      kcalories += calories.tartar
    }
    console.log('Калорийность чизбургера: ' + kcalories)
  }
}