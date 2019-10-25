//Get Default State
//Set Initial State
//Before Get Created
//Render Jsx
//After get created
import React,{Component} from 'react'

class LifeCycle extends Component {

    //Get Default State
    constructor(props){
        console.log("Get Default State")
        super(props)

        //Set Initial State
        this.state={
            title:'LifeCycle'
        }
    }

    //Before Get Created
    componentWillMount(){
        console.log("Before Get Created")
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate")
        if(nextState.title === this.state.title){
            return false
        }else {
            return true
        }
    }
    //Render Jsx
    render(){
        console.log("Render Jsx")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={()=>{this.setState({title:'Something Else'})}}>
                ClickMe
                </div>
            </div>
        )

    }

     //After Get Created
     componentDidMount(){
        console.log("After Get Created")
    }
}


export default LifeCycle;