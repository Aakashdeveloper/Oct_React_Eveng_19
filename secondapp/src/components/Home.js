import React, { Component } from 'react';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="panel panel-primary">
                    <div className="panel-heading">Home Page</div>
                    <div className="panel-body">
                        <div className="jumbotron">
                            <h2>Home Page</h2>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been 
                            the industry's standard dummy text ever
                             since the 1500s, when an unknown printer took 
                             a galley of type and scrambled it to make a type
                              specimen book. It has survived not only five 
                              centuries, but also the leap into electronic 
                              typesetting, remaining essentially unchanged. 
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;