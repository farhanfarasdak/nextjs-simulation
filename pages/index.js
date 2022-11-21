import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import FloatingCounter from '../components/FloatingCounter'
import { action } from '../redux/reducer'
import { retrievePokemons } from '../redux/reducer/pokemon'

const Home = () => {

  const pokemons = useSelector((state) => {
    return state.pokemonReducer.pokemons
  })

  const dispatch = useDispatch()

  const increment = () =>{
    dispatch(action.increment())
  }

  const decrease = () => {
    dispatch(action.decrement())
  }

  const increaseTen = () => {
    dispatch(action.increaseByNumber({ number: 10}))
  }

  const getPokemon = () => {
    dispatch( retrievePokemons() )
  }

  return (
    <div>
      <h1>This is App Page</h1>
      <FloatingCounter/>
      <button onClick={increment}>Increase!</button>
      <button onClick={decrease}>Decrease!</button>
      <button onClick={increaseTen}>Increase By 10</button>
      <Link href="/myhome"><h4>Go To Home</h4></Link>
      <button onClick={getPokemon}>Get Pokemons!</button>
      <h2>Pokemon List :</h2>
      { pokemons.map(pokemon => {
        return(<h4 key={pokemon.name}>{pokemon.name}</h4>)
      })}
    </div>
  )
}

export default Home
