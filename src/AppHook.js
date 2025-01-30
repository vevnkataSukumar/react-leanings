import React from 'react'

export default function AppHook() {
  const initiaCount = 0;
  const inputRef = React.useRef();
  const [count, setCount] = React.useState(initiaCount);
  const increment = React.useCallback((val) => {
    console.log('Value: ', val);
    const value = val ? val : 1;
    setCount((prev) => {
        return prev + value;
    });
  }, []);

  const decrement = () => {
    setCount((prev) => {
        return prev - 1;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input Value: ', inputRef.current.value);
    setCount(inputRef.current.value);
  };

  React.useEffect(() => {
    console.log('Coutn now is '+ count);
  
    return () => {
      console.log('dependency useEffect return');
    }
  }, [count]);

  React.useEffect(() => {
    console.log('Initial Mount');
  
    return () => {
      console.log('initial Mount return');
    }
  }, [])
  

  return (
    <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <form onSubmit={handleSubmit}>
            <button onClick={() => increment(1)}>Increment</button>
            {/* <button onClick={() => increment(5)}>Increment By 5</button>
            <button onClick={() => setCount(initiaCount)}>Reset</button> */}
            <button onClick={decrement}>Decrement</button>
            <br></br>
            <div>
                <input
                    type="text"
                    ref={inputRef}
                    // value={count}
                    // onChange={(e) => setCount(e.target.value)} 
                />
                {/* <input type="text" value={count} onChange={(e) => setCount(parseInt(e.target.value))} /> */}
            </div>
        </form>
      </div>
  )
}
