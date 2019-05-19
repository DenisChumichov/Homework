// Задача №6
function factorial(num){
  if (num === 1){
        return 1;
    }
    else{    
        return num * factorial(num - 1);
    }
}
let factor = factorial(5)
console.log(factor) 