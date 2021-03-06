import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8089/api'
 const getColumns = () => axios.get('/column')
  .then(res => {
    return res.data;
  })

 const getCards = () => axios.get('/card')
  .then(res => {
    return res.data;
  })
   const deleteCard = (id) => axios.delete(`/card/${id}`)
   const addCard = (data) => axios.post(`/card`, data)
   const updateCard = (id, data) => axios.patch(`/card/${id}`, data)
  export default {deleteCard, addCard, updateCard, getColumns, getCards}