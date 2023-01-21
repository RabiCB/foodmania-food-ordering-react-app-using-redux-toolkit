import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './Cartslice'

export const store=configureStore({
    reducer:{
      cart:CartReducer
    }
})

