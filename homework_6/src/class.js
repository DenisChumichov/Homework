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
    let flag = false
    this.sizeList().find((index) => {
      if (index === size){
        flag = true
      }
    })
    if (flag === true){
      this.size = size
      this.sauces = {}
    }
    else{
      throw new Error('Введите коректный размер бургера');
    }    
  }
  addSauce(sauce){
    let flag = false
    this.sauceList().find((index) => {
      if (index === sauce){
        flag = true
      }
    })
    if (flag === true){
      this.sauces[sauce] = true
    }
    else{
      throw new Error('Введите коректный соус');
    }    
  }
  sizeList(){
    let size = ['small', 'big']
    return size
  }
  sauceList(){
    let sauce = ['mayo', 'mustard']
    return sauce
  }
  priceList(){
    let prices = {
      small: 30,
      big: 50,
      mayo: 5,
      mustard: 5
    }
    return prices
  }
  getPrice(){
    let prices = this.priceList()
    let price = 0
    if (this.size === "small"){
      price += prices.small
    }
    if (this.size === "big"){
      price += prices.big
    }
    if (this.sauces.mayo){
      price += prices.mayo
    }
    if (this.sauces.mustard){
      price += prices.mustard
    }
    //console.log('Цена гамбургера: ' + price)
    return price
  }
  removeSauce(sauce){
    let flag = false
    this.sauceList().find((index) => {
      if (index === sauce){
        flag = true
      }
    })
    if (flag === true){
      this.sauces[sauce] = false
    }
    else{
      throw new Error('Введите коректный соус');
    }
  }
  caloriesList(){
    let calories = {
      small: 200,
      big: 320,
      mayo: 30,
      mustard: 35
    }
    return calories
  }
  getCalories(){
    let calories = this.caloriesList()
    let kcalories = 0
    if (this.size === "small"){
      kcalories += calories.small
    }
    if (this.size === "big"){
      kcalories += calories.big
    }
    if (this.sauces.mayo){
      kcalories += calories.mayo
    }
    if (this.sauces.mustard){
      kcalories += calories.mustard
    }
    //console.log('Калорийность гамбургера: ' + kcalories)
    return kcalories
  }
}

export class Сheeseburger extends Hamburger{
  static get SAUCE_TARTAR(){
    return ('tartar') 
  }
  priceList(){
    let prices = {
      small: 40,
      big: 70,
      mayo: 5,
      mustard: 5,
      tartar: 7
    }
    return prices
  }
  caloriesList(){
    let calories = {
      small: 250,
      big: 400,
      mayo: 30,
      mustard: 35,
      tartar: 37
    }
    return calories
  }
  sauceList(){
    let sauce = ['mayo', 'mustard', 'tartar']
    return sauce
  }
  getPrice(){
    let price = super.getPrice()
    if (this.sauces.tartar){
      price += this.priceList().tartar
    }
    return price
    //console.log('Цена чизбургера: ' + price)
  }
  getCalories(){
    let kcalories = super.getCalories()
    if (this.sauces.tartar){
      kcalories += this.caloriesList().tartar
    }
    return kcalories
    //console.log('Калорийность чизбургера: ' + kcalories)
  }
}