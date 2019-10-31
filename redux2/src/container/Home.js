import React,{ Component} from 'react';
import { connect } from 'react-redux';
import {latestNews,articleNews} from '../actions';
import PropTypes from 'prop-types'

class Home extends Component {
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
    }

    render(){
        return(
            <div>
                <h1>News App</h1>
            </div>
        )
    }

}


function mapStateToProps(state){
    console.log(state)
    return{
        artilces:state.artilce
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)