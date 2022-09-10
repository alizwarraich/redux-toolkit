import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from './counterSlice'

function Counter() {
    const [increment, setIncrement] = useState(0)
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const resetAll = () => {
        setIncrement(0);
        dispatch(counterActions.reset());
    }
    return (
        <section>
            <p>{count}</p>
            <button onClick={() => dispatch(counterActions.increment())}>+</button>
            <button onClick={() => dispatch(counterActions.decrement())}>-</button>

            <input type="number" value={increment} onChange={(e) => setIncrement(Number(e.target.value))} />

            <div>
                <button onClick={() => dispatch(counterActions.incrementByAmount(increment))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}

export default Counter
