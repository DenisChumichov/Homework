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
export const columns = JSON.parse(window.localStorage.getItem('columns')) || localStorage.setItem("columns", JSON.stringify(getColumns()))
