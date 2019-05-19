// Задача №2
function arr(){
    let num = []    
    while(num.length < 50)
    {
        let n = Math.round(Math.random()*100)
        if (!num.includes(n)){
            num.push(n)            
        }
    }         
    return num.sort((a,b) => a - b)
}
console.log(arr())
