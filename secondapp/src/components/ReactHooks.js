import React, {useState}  from 'react';

function Hooks(){
    const [title] = useState('Hooks Component')
    return(
        <div>
            <div className="jumbotron">
                <h1>{title}</h1>
            </div>
        </div>
    )
}


export default Hooks;