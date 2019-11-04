import React,{ Component} from 'react';
import { connect } from 'react-redux';
import {latestNews,articleNews,latestGallery} from '../actions';
import PropTypes from 'prop-types';

import ArticleNews  from '../component/Home/ArticlesNews';
import LatestNews from '../component/Home/LatestNews';
import Gallery from '../component/Home/GalleryNews';

class Home extends Component {
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(latestGallery())
    }

    render(){
        return(
            <div>
                <LatestNews latestdata={this.props.artilces.latest}></LatestNews>
                <ArticleNews articledata={this.props.artilces.article}></ArticleNews>
                <Gallery gallerydata={this.props.gal.gallery}></Gallery>
            </div>
        )
    }

}


function mapStateToProps(state){
    console.log(state)
    return{
        artilces:state.articles,
        gal: state.galdata
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)