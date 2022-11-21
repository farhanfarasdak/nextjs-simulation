import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retrievePokemons = createAsyncThunk(
  'pokemons/retrievePokemons',
  async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const data = await resp.json()
    return data
  }
)

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: { pokemons: [] },
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(
        retrievePokemons.fulfilled, (state, action) => {
          state.pokemons = action.payload.results
        })
      .addCase(
        retrievePokemons.pending, (state, action) => {
          state.pokemons = [ { name: 'LOADING..'}] 
        })
      .addCase(
        retrievePokemons.rejected, (state, action) => {
          state.pokemons = [ { name: 'ERROR...'}] 
        })
  }
})

export const pokemonAction = pokemonSlice.actions
export default pokemonSlice