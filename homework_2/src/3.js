// Задача №3    
function arr(){
    let num = []    
    while(num.length < 50)
    {
        let n = Math.round(Math.random()*100)
        if (num.includes(n) === false){
            num.push(n)            
        }
    }         
    return num.sort((a,b) => a - b)
}
let num = arr()
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