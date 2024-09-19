import {useState} from 'react';

export default function AnotherCounter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={increment} style={{margin: '5px', padding: '10px'}}>
                Increment
            </button>
            <button onClick={decrement} style={{margin: '5px', padding: '10px'}}>
                Decrement
            </button>
        </div>
    );
}
