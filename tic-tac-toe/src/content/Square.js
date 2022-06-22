import { useState } from 'react';

const Square = ({ value }) => {
    const [state, setState] = useState(value);

    const onClick = () => {
        setState('X');
    }

    return(
        <button className="square" value={state} onClick={onClick}>
            {state}
        </button>
    );
};

export default Square;