import Counter from './Counter';
import { useState } from 'react';

export default function Dashboard() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const reset = () => {
        setCount(0);
        setCount2(0);
    };

    return (
        <div className='dashboard' role='region' aria-label='Dashboard'>
            <h1>Dashboard</h1>
            <div className='total' aria-live='polite'>
                Total Count: <strong>{count + count2}</strong>
            </div>
            <div className='actions'>
                <button className='btn btn-danger' onClick={reset}>
                    Reset All
                </button>
            </div>
            <div className='counters'>
                <Counter label='Counter A' count={count} setCount={setCount} />
                <Counter label='Counter B' count={count2} setCount={setCount2} />
            </div>
        </div>
    );
}
