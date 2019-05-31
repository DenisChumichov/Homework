import {firstTask} from './1'
import {secondTask} from './2'
import {thirdTask} from './3'
import {fourthTask} from './4'
import {fifthTask} from './5'
import {sixthTask} from './6'

const button1 = document.querySelector('#first');

button1.onclick = () => {
  console.clear()
  firstTask();
};

const button2 = document.querySelector('#second');

button2.onclick = () => {
  console.clear()
  console.log(secondTask())
};

const button3 = document.querySelector('#third');

button3.onclick = () => {
  console.clear()
  thirdTask();
};

const button4 = document.querySelector('#fourth');

button4.onclick = () => {
  console.clear()
  fourthTask()
};

const button5 = document.querySelector('#fifth');

button5.onclick = () => {
  console.clear()
  fifthTask()
};

const button6 = document.querySelector('#sixth');

button6.onclick = () => {
  console.clear()
  sixthTask()
};