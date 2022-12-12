import {createSlice} from '@reduxjs/toolkit';

let userSlice = createSlice(
    {
        name:'user',
        initialState:{},
        reducers:{},
        extraReducers:{}//to deal with API requests in redux store.
    }
)

// to export action creators:

export const {} = userSlice.actions;

//to export user reducers:

export default userSlice.reducer