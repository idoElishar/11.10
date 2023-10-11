import React from 'react';
import useCounter from './UseCounter';
function Comp1() {
  
    const { clicks: greenButton, incrementButtonClicks: addGreen } = useCounter();
    const { clicks: blueButton, incrementButtonClicks: addBlue } = useCounter();

    return (
        <div>
            <button style={{ backgroundColor: 'green' }} onClick={addGreen}>Green Button</button>
            <button style={{ backgroundColor: 'blue' }} onClick={addBlue}>Blue Button</button>
            <p>Green Button Clicks: {greenButton}</p>
            <p>Blue Button Clicks: {blueButton}</p>
        </div>
    );
}

export default Comp1;
