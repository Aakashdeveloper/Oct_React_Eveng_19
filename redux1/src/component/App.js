import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

    componentDidMounnt(){
        this.props.moviesList()
    }

    render(){
        return(
            <div>
                <h1>Redux App</h1>
            </div>
        )
    }
}


function mapStateToProps(state){

}

export default connect(mapStateToProps,actions)(App);