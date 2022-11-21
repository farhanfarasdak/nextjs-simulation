import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action){
      state.counter = state.counter + 1
    },
    decrement(state, action){
      state.counter = state.counter - 1
    },
    increaseByNumber(state, action){
      console.log(action)
      state.counter = state.counter + action.payload.number
    }
  }
})

export const action = counterSlice.actions
export default counterSlice



// const reducerFn = (state = { counter: 0 },action) => {
//   if(action.type === 'INC'){
//     const newState = { counter: state.counter + 1 }
//     return newState
//   }

//   if(action.type === 'DCR'){
//     const newState = { counter: state.counter - 1 }
//     return newState
//   }
  
//   return state
// }

// export default reducerFn