import React, {Component} from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';

class LikeCounter extends Component {
    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How About Article</h3>
                <div className="addlikes-container">
                    <div className="btn like">
                        <div className="hits"></div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn dislike">
                        <div className="hits"></div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}


export default connect()(LikeCounter)