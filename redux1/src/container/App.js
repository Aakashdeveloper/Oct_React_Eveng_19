import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListView from '../component/moviesList'

class App extends Component {

    componentDidMount(){
        this.props.moviesList()
    }

    render(){
        console.log('in render')
        return(
            <div>
                <h1>Redux App</h1>
                <ListView list={this.props.data}></ListView>
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return {
        data:state.movies
    }
}

export default connect(mapStateToProps,actions)(App);