# Contact List Management using React

This project maintains the contact list and do CRUD operations. 

## Getting Started

Follow below steps to project up and running on local machine for development or PROD deployment.
1. Clone the project git clone https://github.com/asmita-jadhav/ContactList_CRUD_react.git    
2. cd ContactList_CRUD_react
3. run npm install
4. run npm start      // for development server 
5. run npm run-script build   then run npm start // for optimized production build and then start local server

### Prerequisites

You need below dependencies to install 
1. npm
2. npm install --save react react-dom react-scripts


## Project Functionality

Follow below steps to project up and running on local machine for development or PROD deployment.
CRUD functionality :   
  1. List contacts  => Load local json file and bind to contacts table state items...
  2. Add a contact  => Add new contact to contact list. Added item lifted up to parent state items..
  3. Edit contact   => Content of User clicked table cell becomes editable..After value change ,user needs to click on Edit button to save changed value.. Added item lifted up to parent state items..
  4. Delete/Inactivate a contact   => Deactive button clicked row's status becomes "inActive".. 
  
  Messages are displayed after successful or aborted operation..
  
## Keywords

React , React.Component , State , props , Conditional rendering, state lifting 

## Authors

* **Asmita Jadhav** - *Initial work* 

