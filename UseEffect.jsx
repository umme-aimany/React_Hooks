import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);

    useEffect(() => {
        console.log("We are learning useEffect hook in React");
    },
     [count, data]);
    return (
        <>
            <h1>UseEffect Hook</h1>
            <p>The count value is {count}</p>
            <button onClick={() => setCount(count + 1)} className='bg-blue-600 text-white px-10 py-2'>Increment Count</button>
            <p>
                The data value is :{data} </p>
            <button onClick={() => setData(data - 1)} className='bg-red-600 text-white px-10 py-2'>Decrement</button>


        </>

    );
};

export default UseEffect;

