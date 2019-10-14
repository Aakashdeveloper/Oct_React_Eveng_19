import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <React.Fragment>
            <h1>My React Page</h1>
            <h2>Second Heading</h2>
        </React.Fragment>
        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))