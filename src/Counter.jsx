import { useState, useEffect } from 'react';
export default function Counter({ label = 'Count', count, setCount }) {
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        setTimer(new Date().toLocaleString());
    }, [count]);

    return (
        <div className='counter-card' role='group' aria-label={label}>
            <h3>{label}</h3>
            <div className='value' aria-live='polite'>
                {count}
            </div>
            <div className='counter-actions'>
                <button
                    className='btn btn-primary'
                    onClick={() => setCount(prev => prev + 1)}
                    aria-label={`${label} increment`}
                >
                    + Increment
                </button>
                <button
                    className='btn btn-ghost'
                    onClick={() => setCount(prev => prev - 1)}
                    aria-label={`${label} decrement`}
                >
                    - Decrement
                </button>
            </div>
            <div className='updated-at'>Updated at: {timer}</div>
        </div>
    );
}
