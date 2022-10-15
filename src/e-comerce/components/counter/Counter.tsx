
import './Counter.css'
import { useState } from 'react';

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const increaseBy = (value:number)=>{
    setCounter(prev => Math.max(prev + value ,0))

  }


  return (
    <div className='flexButton'>
      <button className='buttonsCounterPositive'  onClick={()=>increaseBy(+1)}>+1</button>
      <div className='counter'>{counter}</div>
      <button className='buttonsCounterNegative' onClick={()=>increaseBy(-1)}>-1</button>
    </div>
  )
}
