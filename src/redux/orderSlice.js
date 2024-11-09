import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  stayDuration: 0,
  totalPrice: 0,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateOrder: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.stayDuration = action.payload.stayDuration
      state.totalPrice = action.payload.totalPrice
    },
  },
})

export const {updateOrder} = orderSlice.actions
export default orderSlice.reducer
