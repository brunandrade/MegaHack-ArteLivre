import React, {useState, Component} from 'react';
import{Link} from 'react-router-dom';
import Modal from 'react-modal';
import {FiXCircle} from 'react-icons/fi';
import {ModalContainer, ModalTitle} from'./styles';

class ModalComponent extends Component{    
    render(){
        const [modal, setModal] = useState(false);
        return(
            <Modal className="modal" isOpen={modal} onRequestClose={()=> setModal(false)}>
            <ModalContainer>
              <ModalTitle>Junte-se ao Arte Livre</ModalTitle>
              <Link  onClick={()=>setModal(false)} to="/loja">
                    <FiXCircle className="closeButton" size={30} color="white"/>
                  </Link>
            </ModalContainer>                       
             </Modal>
        )
    }
}

export default ModalComponent;