import React from 'react';

const person = (props) => {
    return(
        <div>
            <p>Im {props.name} and i am {props.age}</p>
        </div>
    )
}

export default person;