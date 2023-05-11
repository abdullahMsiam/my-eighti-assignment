import React from 'react';

const Title = (props) => {
    console.log(props.bk);
    return (
        <div>
            <h1>{props.bk}</h1>
        </div >
    );
};

export default Title;