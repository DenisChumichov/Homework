export function getColumns(){
    const columns = [
        {
          id: 5,
          title: 'ToDo',
        },
        {
          id: 7,
          title: 'In Progress',
        },
        {
          id: 8,
          title: 'Done',
        }
      ];
      return columns
}

/*const columns = [
  {
    id: 5,
    title: 'ToDo',
  },
  {
    id: 7,
    title: 'In Progress',
  },
  {
    id: 8,
    title: 'Done',
  }
];
export function LS(){
  window.localStorage.setItem('columns', JSON.stringify(columns));
}*/
// [{"id":15,"title":"Зробити домашку","column":7},{"id":9,"title":"Встановити Node.js","column":8}]