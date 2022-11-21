import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducer";
import pokemonSlice from "../reducer/pokemon";

const allReducers = combineReducers({
  counterReducer: counterSlice.reducer,
  pokemonReducer: pokemonSlice.reducer
})

const myStore = configureStore({
  reducer: allReducers
})

export default myStore

// import { createStore } from "redux";
// import reducerFn from "../reducer";

// const myStore = createStore(reducerFn)
// export default myStore