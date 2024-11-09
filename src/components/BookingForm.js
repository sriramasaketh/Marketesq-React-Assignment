import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateOrder} from './redux/orderSlice'

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    stayDuration: 0,
  })
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const totalPrice = formData.stayDuration * 100 
    dispatch(updateOrder({...formData, totalPrice}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Your name'
        value={formData.name}
        onChange={e => setFormData({...formData, name: e.target.value})}
      />
      <input
        type='email'
        placeholder='Your email'
        value={formData.email}
        onChange={e => setFormData({...formData, email: e.target.value})}
      />
      <input
        type='number'
        placeholder='Stay duration'
        value={formData.stayDuration}
        onChange={e => setFormData({...formData, stayDuration: e.target.value})}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default OrderForm
