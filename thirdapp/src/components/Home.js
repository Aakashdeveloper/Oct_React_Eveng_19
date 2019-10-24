import React, {Component} from 'react';
import Banner from './Banner.';
import ArtistList from './Artists';

const url = "http://localhost:8900/artists"

class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            artists:' '
        }
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                artists:data
            })
        })
    }

    render(){
        console.log("in render")
        return(
            <div>
                <Banner/>
                <ArtistList artistData={this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home;