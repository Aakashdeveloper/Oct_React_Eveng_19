import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';


class App extends Component {
    render(){
        return(
            <div>Home Page</div>
        )
    }
}


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
)