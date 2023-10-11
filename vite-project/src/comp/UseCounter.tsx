import  { useState } from 'react';

function useCounter() {
    const [clicks, setClicks] = useState(0);

    const incrementButtonClicks = () => {
        setClicks(clicks + 1);
    };

    return { clicks, incrementButtonClicks };
}
export default useCounter