import {configureStore} from '@reduxjs/toolkit';
//adding userSlice to store
import userSliceReducer from './slices/userslice'


export const store = configureStore(
    {
        reducer:{
            user:userSliceReducer
        }
    }
)