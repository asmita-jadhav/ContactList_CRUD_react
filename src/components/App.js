/**
 * This is App component which will load home page with childcomponent
 * Author :Asmita Jadhav
 * Date : 21/08/2018
*/
import React,{Component} from 'react';

import Header from './Home/Header';
import Message from './Message';
import AddContact from './Contacts/AddContact';
import ListContacts from './Contacts/ListContacts';
import Footer from './Home/Footer';

const items=require('./data/contactList.json');

class App extends Component {

   constructor() {        
        super();

        this.state = {
            items: items,
            message:null                            
        }; 
        this.changeItems=this.changeItems.bind(this); 
        this.loadMessage=this.loadMessage.bind(this);  
       this.messageChanged=this.messageChanged.bind(this);
    }
    
    changeItems(data){
        this.state.items.push(data);
        this.setState({
            items: items
        });
    }

    loadMessage(data){
        this.setState({
            message:data
        });
    }
    
    messageChanged(data){
        this.setState({
            message:null
        });
    }
            
    render() {
        return (
        <div className="App">          
            <Header />     
            {(this.state.message!=null) ? <Message message={this.state.message} onChange={this.messageChanged}/>  : null }
            <AddContact newItem={this.changeItems} message={this.loadMessage}/>
            <ListContacts items={this.state.items} message={this.loadMessage} />
            <Footer />
        </div>
        );
    }
}

export default App;