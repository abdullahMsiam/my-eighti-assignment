import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
        <div>
            <h1>ANSWER</h1>
            <div className='answer'>
                <div>
                    <h3>Props vs State</h3>
                    <p>1. Props use for the pass dedicated data from parent Component to children component. And this data can be utilize in the children component. </p>
                    <p>2. State mainly use for manage data which can be change with the purpose. It change with the purpose of component</p>
                </div>
                <div>
                    <h3>How does useState work?</h3>
                    <p>useState is a hook in react project which is using for the manage state. When state need to change useState hook work for that and state value set on a function.</p>
                </div>
                <div>
                    <h3>Purpose of useEffect other than fetching data.</h3>
                    <p>Their are various purpose of the useEffect. It also a hook in react project. Firstly it can fetch data from database. useEffect can be use for update a file. It also make to possible eventListener or animated.</p>
                </div>
                <div>
                    <h3>How Does React work?</h3>
                    <p>React is a javascript library for developer. It may create a nice process to develop a javascript project. This is component based library. Its provided virtual dom and it is connected to reconlliation algorithm or diff algorithm.</p>
                </div>
            </div>
        </div>
    );
};

export default Answer;