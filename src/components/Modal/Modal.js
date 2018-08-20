import React,{Component} from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';

import './Modal.css';

class Modal extends Component {
    
      
  render() {
    return (
      <div className='modal'>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">hello</h4>                   
                </div>
                <div className="modal-body">          
                    body here
                </div>                
            </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {  
  show: PropTypes.bool  
};

export default Modal;
//ReactDOM.render(<Modal />, document.getElementById("modal"));