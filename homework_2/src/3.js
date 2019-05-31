// Задача №3    
import {secondTask} from './2'
export function thirdTask(){
    let num = secondTask()
    console.log(num)
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i]%2 === 0){
            console.log(`последнее чётное число: ${num[i]}`)
            break
        }
    }
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i]%2 !== 0){
            console.log(`последнее нечётное число: ${num[i]}`)        
            break
        }
    }
}