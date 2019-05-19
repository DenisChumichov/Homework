// Задача №4
let users = [
  {
    id: 1,
   name: 'Mihail'
  },
  {
    id: 2,
   name: 'Marina'
  },
  {
    id: 3,
   name: 'Andrew'
  },
  {
    id: 4,
   name: 'Ilya'
  },
];
const res = users.reduce((accumulator, currentValue) => {
accumulator[currentValue.id] = currentValue.name
return accumulator;
},{})
console.log(res)