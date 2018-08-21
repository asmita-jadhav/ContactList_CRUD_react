/**
 * This component used to display the contats list in table view..Also you can Edit and deactivate the contact..
 * Author :Asmita Jadhav
 * Date : 21/08/2018
*/
import React, {
    Component
} from 'react';

class ListContacts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: this.props.items,
            modalVisible: false         
        };
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleStatusClick = this.handleStatusClick.bind(this);
    }
    
   changedItems(items) {
        this.setState({
            items: items
        });
    }    

    handleEditClick(event) {  
        event.preventDefault();
        event.target.contentEditable=true;        
    }

    handleEditChangeClick(item){
        let updatedList = this.state.items.map(obj => {
            if (obj.id === item.id) {
                return Object.assign(obj,item);
            }
            return obj;
        });
        this.setState({
            items: updatedList
        });

    }

    handleStatusClick(item) 
    {
        let updatedList = this.state.items.map(obj => {
            if (obj.id === item.id) {
                return Object.assign({}, obj, {
                    status: "inActive"
                });
            }
            return obj;
        });
        this.setState({
            items: updatedList
        });
        if(updatedList!=null){
            this.props.message({"message":"Successfully contact deactivated.","type":"success"});                        
        }else{
            this.props.message({"message":"Error in contact deactivation..Kindly check the details again.","type":"error"});
        }  
    }

    render() {

        return ( <div><table className = "table" >
                    <thead>
                        <tr>
                            <th> First Name </th>   
                            <th> Last Name </th>   
                            <th> Email </th>   
                            <th> Phone Number </th>   
                            <th> Status </th>                               
                            <th > </th>  
                        </tr> 
                    </thead>  
                    <tbody> 
                    {this.state.items.map(function (row) {   
                                        
                            return (                                
                                    <tr key = { row.id } >
                                        <td onClick={(e)=>this.handleEditClick(e)}> { row.firstName} </td>
                                        <td onClick={(e)=>this.handleEditClick(e)}> {row.lastName} </td> 
                                        <td onClick={(e)=>this.handleEditClick(e)}> {row.email} </td> 
                                        <td onClick={(e)=>this.handleEditClick(e)}> {row.phoneNumber} </td>  
                                        <td onClick={(e)=>this.handleEditClick(e)}> { row.status} </td>                                          
                                        <td >
                                            <button type = "button" className = "btn btn-default btn-sm" id = {row.id } onClick = { () => this.handleStatusClick(row) } > Deactivate 
                                            </button>  
                                        </td > 
                                </tr >     )                                                                                               
                    }.bind(this))
                }
                    </tbody> 
                </table > 
            </div > )

        }

    }

    export default ListContacts;
