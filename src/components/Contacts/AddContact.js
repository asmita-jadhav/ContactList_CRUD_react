/**
 * This component used to add new contact into the list..
 * Author :Asmita Jadhav
 * Date : 21/08/2018
*/

import React, {
    Component
} from 'react';

import './Contacts.css';

class AddContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false                      
        };
        this.handleData=this.handleData.bind(this);
    }

    handleData(data) {           
        if(data!=null){
            this.props.message({"message":"Successfully contact added.","type":"success"});
            this.props.newItem(data); 
            this.onClick();  
        }else{
            this.props.message({"message":"Error in contact additionKindly check the details again.","type":"error"});
        }         
    }

    onClick() {
        this.setState({
            showForm: !this.state.showForm
        });
    }
    
    render() {

        return ( <div className = "AddContact" >
                    <button className = "accordion" onClick = { this.onClick.bind(this)} > Click Here to Add Contact </button>  
                    {this.state.showForm ? < AddContactForm handlerFromParant={this.handleData}/> : null  }
                </div>
    );
}
}

class AddContactForm extends Component {

    constructor() {
        super();
        this.state = {            
                showPopup: false,
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                status: ''          
        };
    
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    onChange = (e) => {   
        e.preventDefault();      
        this.setState({ [e.target.id]: e.target.value });
      }

     

    handleSubmit(event) {               
        event.preventDefault();        
        
      var formdata = {
        "firstName" : this.state.firstName,      
        "lastName" : this.state.lastName,
        "email" : this.state.email,
        "phoneNumber" : this.state.phoneNumber,
        "status" : this.state.status
      }
            
      this.props.handlerFromParant(formdata);     

      this.setState({                    
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        status: ''          
      });
      
    }
    
    render() {
        return ( <form className = "form-inline addContactForm" onSubmit = { this.handleSubmit } >
                    <div className = "form-group" >
                        <label htmlFor = "firstName" > First Name: </label> 
                        <input type = "text" className = "form-control" id = "firstName" value={this.state.firstName} onChange={this.onChange} required />
                    </div>  
                    <div className = "form-group" >
                        <label htmlFor = "lastName" > Last Name: </label> 
                        <input type = "text" className = "form-control" id = "lastName" value={this.state.lastName} onChange={this.onChange} required />            
                    </div>
                    <div className = "form-group">            
                        <label htmlFor = "email" > Email: </label> 
                        <input type = "email" className = "form-control" id = "email" value={this.state.email} onChange={this.onChange} required />            
                    </div> 
                    <div className = "form-group" >
                        <label htmlFor = "phoneNumber" > Phone Number: </label>
                        <input type = "tel" className = "form-control" id = "phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} required />
                    </div> 
                    <div className = "form-group" >
                        <label htmlFor = "status" > Status: </label> 
                        <input type = "text" className = "form-control" value={this.state.status} onChange={this.onChange} id = "status" required />
                    </div> 
                    <button type = "submit" className = "btn btn-default" > Add </button>  
                </form > );
        }
    }
    


    export default AddContact;
