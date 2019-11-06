import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Home from '../container/Home';
import NewsDetails from '../container/NewsDetails';
import FormContainer from '../container/FormContainer';

import Header from './Header';
import Footer from './Footer';


class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/details/:id" component={NewsDetails}></Route>
                    <Route exact path="/forms" component={FormContainer}></Route>
                    <Footer></Footer>
                </div>
            </BrowserRouter>
        )
    }
}


export default Routing