/**
 * This is Message component used to display Success or error message
 * Author :Asmita Jadhav
 * Date : 21/08/2018
*/

import React,{Component} from 'react';


class Message extends Component {    
    
    constructor(){
        super();
        
        this.onCloseClick=this.onCloseClick.bind(this);
    }
    
    onCloseClick(){                              
        this.props.onChange('');      
    }
    
    render() {                 
            return (                      
                <div id="messagebox" className={"alert alert-"+this.props.message.type+" alert-dismissible fade show"}>
                    <button type="button" className="close" data-dismiss="alert" onClick={this.onCloseClick}>&times;</button>
                    <strong>{this.props.message.type}!</strong> {this.props.message.message}
                </div>
            );          
    }
}

export default Message;