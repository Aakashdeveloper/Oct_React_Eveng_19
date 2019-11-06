import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PostDate } from '../actions';


class FormContainer extends Component {
    constructor(){
        super()

        this.state={
            title:'Earth Quick in Japan',
            body: 'Yesterday it was Earth Quick in Japan'
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event){
        this.setState({title:event.target.value})
    }

    handleChangeBody(event){
        this.setState({body:event.target.value});
    }

    handleSubmit(event){
        this.props.PostDate(
            this.state.title,
            this.state.body
        );
        alert('Submitted')
    }

    
    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleChangeTitle}
                            id="title"/>
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.body}
                            onChange={this.handleChangeBody}
                            id="body"/>
                    </div>
                    <button type="submit" className="btn btn-success"
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({PostDate},dispatch)
}

export default connect(null, mapDispatchToProps)(FormContainer)