import React from 'react'
import useCounter from './UseCounter'
function MouseEnter() {
    const { clicks: numHover, incrementButtonClicks: addMouse } = useCounter();

    return (
        <div style={{border:'2px solid blue'}} onMouseEnter={addMouse}>
            <p>Mouse Enter Count: {numHover}</p>
        </div>
    )
}

export default MouseEnter
