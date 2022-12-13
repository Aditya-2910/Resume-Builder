import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const userLogin = createAsyncThunk('userlogin',async(userCredentialObj,thunkApi)=>{

    let response = await axios.post('/user-api/Login',userCredentialObj)

    let data = response.data;
    if(data.message==="login success"){
        localStorage.setItem("token",data.payload)

        return data.user;

    }
    if(data.message==="Incorrect username or password")
    {
        return thunkApi.rejectWithValue(data);
    }

})


let userSlice = createSlice(
    {
        name:'user',
        initialState:{
            user:{},
            isError:false,
            isSuccess:false,
            isLoading:false,
            errMsg:''
        },
        reducers:{
            clearLoginStatus:(state)=>{
                state.isSuccess=false;
                state.isError=false;
                state.user=null;
                state.errMsg='';
                state.isLoading=false;
                return state
            }
        },
        extraReducers:{

            //to track the promise created after userlogin
            [userLogin.pending]:(state,action)=>{
                state.isLoading=true
            },
            [userLogin.fulfilled]:(state,action)=>{
                state.user = action.payload;
                state.isLoading=false;
                state.isSuccess=true;
                state.isError=false;

            },
            [userLogin.rejected]:(state,action)=>{
                state.isError=true;
                state.isSuccess=false;
                state.isLoading=false;
                state.errMsg=action.payload
            }


        }//to deal with API requests in redux store.
    }
)

// to export action creators:

export const {clearLoginStatus} = userSlice.actions;

//to export user reducers:

export default userSlice.reducer