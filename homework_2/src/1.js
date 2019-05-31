// Задача №1
export function firstTask(){
    let yearStart = prompt('Введите начальный год', 2019);
    let yearEnd = prompt('Введите конечный год', 2019);
    yearStart = isNaN(yearStart) ?  2019 : yearStart;
    yearEnd = isNaN(yearEnd) ?  2019 : yearEnd;
    for (let i = yearStart; i <= yearEnd; i++) {
        if (i % 4 === 0){
            if(i % 100 !== 0 || i % 400 === 0){
                console.log(i);
            }    
        }  
    }
}