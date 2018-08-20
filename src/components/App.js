import React,{Component} from 'react';

import $ from 'jquery';

import Header from './Home/Header';
import AddContact from './Contacts/AddContact';
import ListContacts from './Contacts/ListContacts';
import Footer from './Home/Footer';

const items = [{
        "id": "011",
        "firstName": "Cassio",
        "lastName": "Zen",
        "email": "cassiozen@test.com",
        "phoneNumber": 123456789,
        "status": "Active"
  },
    {
        "id": "012",
        "firstName": "Dan",
        "lastName": "Abramov",
        "email": "gaearon@somewhere.com",
        "phoneNumber": 123654789,
        "status": "Active"
  },
    {
        "id": "013",
        "firstName": "Pete",
        "lastName": "Hunt",
        "email": "floydophone@somewhere.com",
        "phoneNumber": 123675489,
        "status": "Active"
  },
    {
        "id": "014",
        "firstName": "Paul",
        "lastName": "O’Shannessy",
        "email": "zpao@somewhere.com",
        "phoneNumber": 126543789,
        "status": "Active"
  },
    {
        "id": "015",
        "firstName": "Ryan",
        "lastName": "Florence",
        "email": "rpflorence@somewhere.com",
        "phoneNumber": 123456789,
        "status": "Active"
  },
    {
        "id": "016",
        "firstName": "Sebastian",
        "lastName": "Markbage",
        "email": "sebmarkbage@here.com",
        "phoneNumber": 123456789,
        "status": "Active"
  }
];

class App extends Component {

   constructor(props) {
        super(props);

        this.state = {
            items: items,                     
        };        
    }
    
    changeItems(items){
        this.setState({
            items:items
        })
    }
    
  render() {
      return (
      <div className="App">          
          <Header />          
          <AddContact />
          <ListContacts items={this.state.items} />
          <Footer />
      </div>
      );
  }
}

export default App;