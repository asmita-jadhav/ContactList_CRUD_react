import React, {
    Component
} from 'react';

//import Modal from '../Modal/Modal';
import './Contacts.css';

//import $ from 'jquery';

class AddContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false            
        };
    }

    onClick() {
        this.setState({
            showForm: !this.state.showForm
        });
    }
    
    render() {

        return ( < div className = "AddContact" >
                <
                button className = "accordion"
                onClick = {
                    this.onClick.bind(this)
                } > Click Here to Add Contact < /button>  {
                this.state.showForm ? < AddContactForm / > : null
            } <
            /div>
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
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state        
        this.setState({ [e.target.id]: e.target.value });
      }

    handleSubmit(event) {
        //this.togglePopup.bind(this);
        console.log("submitted");
        event.preventDefault();        
        
      var formdata = {
        "firstName" : this.state.firstName,      
        "lastName" : this.state.lastName,
        "email" : this.state.email,
        "phoneNumber" : this.state.phoneNumber,
        "status" : this.state.status

      }
      
      
          
      /*items.push(FormData);
      listContacts.changedItems(items); */
       
        /*$.ajax({
            url: 'contactList1.json',
            type: 'POST',
            dataType: 'JSON',
            body: JSON.stringify(formdata),            
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            success: function (data) {
                console.log(data);
            },
            error: function (xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });*/
      
    }

    render() {
        return (             <
            form className = "form-inline addContactForm"
            onSubmit = {
                this.handleSubmit
            } >
            <
            div className = "form-group" >
            <
            label htmlFor = "firstName" > First Name: < /label>  <
            input type = "text"
            className = "form-control"
            id = "firstName" value={this.state.firstName} onChange={this.onChange}
            required / >
            <
            /div>  <
            div className = "form-group" >
            <
            label htmlFor = "lastName" > Last Name: < /label> <
            input type = "text"
            className = "form-control"
            id = "lastName" value={this.state.lastName} onChange={this.onChange}
            required / >
            <
            /div> <
            div className = "form-group" >
            <
            label htmlFor = "email" > Email: < /label> <
            input type = "email"
            className = "form-control"
            id = "email" value={this.state.email} onChange={this.onChange}
            required / >
            <
            /div> <
            div className = "form-group" >
            <
            label htmlFor = "phoneNumber" > Phone Number: < /label> <
            input type = "number"
            className = "form-control"
            id = "phoneNumber" value={this.state.phoneNumber} onChange={this.onChange}
            required / >
            <
            /div> <
            div className = "form-group" >
            <
            label htmlFor = "status" > Status: < /label> <
            input type = "text"
            className = "form-control" value={this.state.status} onChange={this.onChange}
            id = "status"
            required / >
            <
            /div> <
            button type = "submit"
            className = "btn btn-default" > Add < /button> < /
            form > );
        }
    }
    


    export default AddContact;
