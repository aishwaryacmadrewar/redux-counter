import {createSlice} from "@reduxjs/toolkit";
export const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:8
    },
    reducers:{
        increment:state=>{state.value+=1},
        decrement:state=>{state.value-=2},
        incrementByAmount:(state,action)=>{
            state.value+=Number(action.payload)
        },
        reset:state=>{state.value=0}
    }
})
export const {increment,decrement,incrementByAmount,reset}=counterSlice.actions;
export default counterSlice.reducer;