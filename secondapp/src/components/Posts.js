import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="panel panel-danger">
                    <div className="panel-heading">Posts Page</div>
                    <div className="panel-body">
                        <div className="jumbotron">
                            <h2>Posts Page</h2>
                            <p>JavaScript</p>
                            <Link to="/posts/javascript">Details</Link>
                            <p>React</p>
                            <Link to="/posts/react">Details</Link>
                            <p>Angular</p>
                            <Link to="/posts/angular">Details</Link>
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


export default Posts;