export class Hamburger{
  static get SIZE_SMALL(){
    return (this.name + '_small')  
  }
  static get SIZE_BIG(){
    return (this.name + '_big') 
  }
  static get SAUCE_MAYO(){
    return (this.name + '_mayo')
  }
  static get SAUCE_MUSTARD(){
    return (this.name + '_mustard') 
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
      this.sauces = []
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
      this.sauces.push(sauce)
    }
    else{
      throw new Error('Введите коректный соус');
    }    
  }
  sizeList(){
    let size = ['Hamburger_small', 'Hamburger_big']
    return size
  }
  sauceList(){
    let sauce = ['Hamburger_mayo', 'Hamburger_mustard']
    return sauce
  }
  priceList(){
    let prices = {
      Hamburger_small: 30,
      Hamburger_big: 50,
      Hamburger_mayo: 5,
      Hamburger_mustard: 5
    }
    return prices
  }
  getPrice(){
    let prices = this.priceList()
    let price = 0
    this.sizeList().map((index) => {
      if (this.size.indexOf(index) !== -1){
        price += prices[index]
      }
    })
    this.sauceList().map((index) => {
      if (this.sauces.indexOf(index) !== -1){
        price += prices[index]
      }
    })
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
      if (this.sauces.indexOf(sauce) === -1){
        throw new Error('Такого соуса нет в вашем бургере');
      }
      else{
        this.sauces.splice(this.sauces.indexOf(sauce),1)
      }
    }
    else{
      throw new Error('Введите коректный соус');
    }
  }
  caloriesList(){
    let calories = {
      Hamburger_small: 200,
      Hamburger_big: 320,
      Hamburger_mayo: 30,
      Hamburger_mustard: 35
    }
    return calories
  }
  getCalories(){
    let calories = this.caloriesList()
    let kcalories = 0
    this.sizeList().map((index) => {
      if (this.size.indexOf(index) !== -1){
        kcalories += calories[index]
      }
    })
    this.sauceList().map((index) => {
      if (this.sauces.indexOf(index) !== -1){
        kcalories += calories[index]
      }
    })
    return kcalories
  }
}

export class Сheeseburger extends Hamburger{
  static get SAUCE_TARTAR(){
    return (this.name + '_tartar') 
  }
  sizeList(){
    let size = ['Сheeseburger_small', 'Сheeseburger_big']
    return size
  }
  priceList(){
    let prices = {
      Сheeseburger_small: 40,
      Сheeseburger_big: 70,
      Сheeseburger_mayo: 5,
      Сheeseburger_mustard: 5,
      Сheeseburger_tartar: 7
    }
    return prices
  }
  caloriesList(){
    let calories = {
      Сheeseburger_small: 250,
      Сheeseburger_big: 400,
      Сheeseburger_mayo: 30,
      Сheeseburger_mustard: 35,
      Сheeseburger_tartar: 37
    }
    return calories
  }
  sauceList(){
    let sauce = ['Сheeseburger_mayo', 'Сheeseburger_mustard', 'Сheeseburger_tartar']
    return sauce
  }
}