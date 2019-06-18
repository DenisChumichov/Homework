//console.log("sdds")
import {Hamburger, Сheeseburger} from './class'
const burger1 = new Hamburger(Hamburger.SIZE_SMALL);
//console.log(Hamburger.SIZE_BIG)
burger1.addSauce(Hamburger.SAUCE_MAYO);
burger1.addSauce(Hamburger.SAUCE_MUSTARD);
//console.log(this.mayo)
burger1.getPrice() // -> 40

burger1.removeSauce(Hamburger.SAUCE_MAYO);

burger1.getPrice() // -> 35
burger1.getCalories() // -> 235

const burger2 = new Сheeseburger(Сheeseburger.SIZE_BIG);

burger2.addSauce(Сheeseburger.SAUCE_TARTAR);
burger2.getPrice() // -> 77
burger2.getCalories() // -> 437
