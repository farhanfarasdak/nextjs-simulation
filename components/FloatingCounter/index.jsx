import style from './style.module.css'

import { useSelector } from "react-redux"

const FloatingCounter = () => {
  const counter = useSelector((state) => state.counterReducer.counter)

  return(
    <div className={style.floatingCounter}>
      <p className={style.floatingText}>Current Redux Counter : {counter}</p>
    </div>
  )
}

export default FloatingCounter