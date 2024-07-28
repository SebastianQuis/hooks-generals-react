import { useState } from "react";


export const useCounter = ( initValue = 1 ) => {
    
    const [count, setCount] = useState(initValue);

    const reset     = () => setCount( initValue );
    const increment = ( value = 1 ) => setCount( count + value );
    const decrement = ( value = 1 ) => {
        if (count < 2) return;
        setCount( count - value  );   
    }    

    return {
        count,
        increment,
        decrement,
        reset
    }

}



