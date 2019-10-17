import React,{Component} from 'react';
import './Header.css'

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:"React App",
            userInput:"User text Here"
        }
    }

    inputChanges(event){
        console.log(event.target.value)
        this.setState({userInput:event.target.value?event.target.value:'User text Here'})
    }

    render(){
        return(
            <header>
               <div className="logo"
               onClick={()=>{console.log('logo clicked')}}>
                   {this.state.title}
               </div>
               <center>
                <input  onChange={this.inputChanges.bind(this)}/>
                <h4>{this.state.userInput}</h4>
               </center>
               <hr/>
            </header>
        ) 
    }
}

export default Header;