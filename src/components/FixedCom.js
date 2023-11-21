import React from 'react';

const FixedComponent = ({callbackResultView}) => {
    const callResult = () => {
        callbackResultView();
    }
    const fixedComponentStyle = {
        position: 'fixed',
        bottom: '20px', // Adjust as needed
        right: '20px', // Adjust as needed
        // Additional styles (e.g., width, height, background, etc.)
        width: '100px',
        height: '50px',
        background: '#fff',
        //border: '1px solid #ccc',
        padding: '10px',
    };

    return (
        <div style={fixedComponentStyle}>
            <h1 onClick={callResult}>Submit</h1>
        </div>
    );
};



export default FixedComponent;
