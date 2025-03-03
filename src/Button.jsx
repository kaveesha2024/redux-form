import React from 'react';

const Button = ({btnName, onClick}) => {
    return (
        <div>
            <button
                style={{padding:'10px', border: 'solid black 1px', borderRadius: '5px', marginTop: '15px'}}
                onClick={onClick}
                type='button'
            >{btnName}</button>
        </div>
    );
};

export default Button;