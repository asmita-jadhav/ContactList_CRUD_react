import React,{Component} from 'react';

class EditContact extends Component {

       
  render() {
      return (            
            <tr className="editContact" key={this.props.id} contentEditable>            
               <td> <input type = "text"  id = "firstName" value={this.props.firstName} required / >     </td>       
                <td><input type = "text"id = "lastName" value={this.props.lastName} required / >  </td>          
                <td><input type = "email" id = "email" value={this.props.email} required / >          </td>   
                <td><input type = "number" id = "phoneNumber" value={this.props.phoneNumber} required / > </td>            
                <td><input type = "text" id = "status" value={this.props.status} required / >            </td> 
           <td><button type = "Confirm" className = "btn btn-default" > Confirm < /button>
           <button type = "Discard" className = "btn btn-default" > Discard < /button></td> 
        </tr>     
      );
  }
}


export default EditContact;