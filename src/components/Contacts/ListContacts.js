import React, {
    Component
} from 'react';



//import DeactiveContact from './DeactiveContact';
//import Modal from '../Modal/Modal';
import EditContact from './EditContact';

//import $ from 'jquery';


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

    handleEditClick(e,item) {        
        this.setState({
            cellEditable:'true'
        });
    }

    handleStatusClick(item) {

        let updatedList = this.state.items.map(obj => {
            if (obj.id === item.id) {
                return Object.assign({}, obj, {
                    status: "Deactive"
                });
            }
            return obj;
        });
        this.setState({
            items: updatedList
        });
    }

    render() {

        return ( < div >< table className = "table" >
            <
            thead >
            <
            tr >
            <
            th > First Name < /th>   <
            th > Last Name < /th>   <
            th > Email < /th>   <
            th > Phone Number < /th>   <
            th > Status < /th>  <
            th > < /th>   <
            th > < /th>  < /
            tr > <
            /thead>  <
            tbody > {
                this.state.items.map(function (row) {                        
                            return (
                                <tr key = { row.id } isRowEditable='false'>
                                <td > {
                                    row.firstName
                                } < /td>  <
                                td> {
                                    row.lastName
                                } < /td> <
                                td > {
                                    row.email
                                } < /td> <
                                td > {
                                    row.phoneNumber
                                } < /td>  <
                                td > {
                                    row.status
                                } < /td>  <
                                td >
                                <
                                button type = "button"
                                className = "btn btn-default btn-sm"
                                id = {
                                    row.id
                                }
                                onClick = {
                                    e => this.handleEditClick(e, row)
                                } >
                                Edit <
                                /button> < /td > <
                                td >
                                <
                                button type = "button"
                                className = "btn btn-default btn-sm"
                                id = {
                                    row.id
                                }
                                onClick = {
                                    () => this.handleStatusClick(row)
                                } > Deactivate < /button>  < /
                                td > <
                                /tr >)                                                                
                    }.bind(this))
                }                     < / tbody>  < /
                table > 
            </div > )

        }

    }

    export default ListContacts;
