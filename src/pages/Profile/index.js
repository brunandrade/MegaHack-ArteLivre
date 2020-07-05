import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import logo from '../../assets/artelivre.png';
import user from '../../assets/userImage.svg';
import Modal from 'react-modal';
import HeaderComponent from '../Components/HeaderComponent'
import { FiGlobe, FiSidebar, FiMessageCircle, FiStar, FiArchive, FiHelpCircle,FiXCircle} from 'react-icons/fi';
import {Container,Content,ContentHeader ,Title, HelpButton, ShopContainer, SalesContainer, ArteLivreButton, ArteLogo,
  ShopProfile, ShopIcon, ShopName, Bar, ShopInfo, ShopImage, Info, InfoText, SalesHeader, SalesTitle, SalesBar, SalesInfo, SaleData,
   Quantity, SalesDataBar, DataTitle, SalesDataHeader, ModalContainer, ModalTitle, ModalLogo,ModalCloseButton, 
   ModalInputs, ModalSelect, Option, ModalInputText, ModalDescription, ModalCheckbox, Check, ModalButton} from'./styles';
    
function Profile() {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <HeaderComponent />

      <Content>
        <ContentHeader>
          <Title>Mercado Shops</Title>

          <Link  onClick={()=>setModal(true)} to="/loja">
            <ArteLivreButton>
              <ArteLogo src={logo}/>
              Junte-se ao Arte Livre
              </ArteLivreButton>
          </Link>
         
          <HelpButton>Preciso de ajuda</HelpButton>
        </ContentHeader>
       

        <ShopContainer>
            <ShopProfile>
              <ShopIcon>
                <ShopImage src={user}/>
              </ShopIcon>
              <ShopName>Flores e Artesanato</ShopName>
            </ShopProfile>

            <Bar />

            <ShopInfo>
              <Info>
                <FiGlobe size={20} color="#1F6CDB"/>
                <InfoText>Dominio Web</InfoText>
              </Info>

              <Info>
                <FiSidebar size={20} color="#1F6CDB"/>
                <InfoText>Carrosel de Imagens</InfoText>
              </Info>

              <Info>
                <FiMessageCircle size={20} color="#1F6CDB"/>
                <InfoText>Whatsapp</InfoText>
              </Info>

              <Info>
                <FiStar size={20} color="#1F6CDB"/>
                <InfoText>Ferramentas de marketing</InfoText>
              </Info>

              <Info>
                <FiArchive size={20} color="#1F6CDB"/>
                <InfoText>Vendas</InfoText>
              </Info>
            </ShopInfo>

        </ShopContainer>
        

        <SalesContainer>
          <SalesHeader>
            <SalesTitle>Métricas da sua loja</SalesTitle>
            <SalesBar/>
          </SalesHeader>

          <SalesInfo>
            <SaleData>
              <SalesDataHeader>              
                <DataTitle>Visitas</DataTitle>
                <FiHelpCircle size={20} color="#1F6CDB"/>
              </SalesDataHeader>            
             
              <Quantity>0</Quantity>
            </SaleData>
            <SalesDataBar/>

            <SaleData>              
              <SalesDataHeader>              
              <DataTitle>Conversões</DataTitle>
                <FiHelpCircle size={20} color="#1F6CDB"/>
              </SalesDataHeader>   
              <Quantity>0</Quantity>
            </SaleData>
            <SalesDataBar/>

            <SaleData>
            <SalesDataHeader>              
              <DataTitle>Taxa de conversão</DataTitle>
                <FiHelpCircle size={20} color="#1F6CDB"/>
              </SalesDataHeader>               
              <Quantity>0%</Quantity>
            </SaleData>
           
          </SalesInfo>



        </SalesContainer>
      </Content>

      <Modal className="modal" isOpen={modal} onRequestClose={()=> setModal(false)}>
            <ModalContainer>
              <ModalTitle>
                <ModalLogo src={logo}/>
                <ModalCloseButton>
                  <Link  onClick={()=>setModal(false)} to="/loja">
                      <FiXCircle size={30} color="white"/>
                  </Link>
                </ModalCloseButton>               
              </ModalTitle>

              <ModalInputs>
                <ModalInputText>Selecione sua ocupação</ModalInputText>
                <ModalSelect>
                  <Option>Selecione</Option>
                  <Option>Autônomo</Option>
                  <Option>Comerciante Local</Option>
                  <Option>Artesão</Option>
                  <Option>Comunidade de Artesãoes</Option>
                  <Option>Artista independente</Option>
                </ModalSelect>

                <ModalInputText>Nos conte sobre sua jornada</ModalInputText>
                <ModalDescription/>

                <ModalCheckbox>
                  <Check type="checkbox"/>
                  <ModalInputText>Declaro que sou um pequeno comerciante/ <br/> artesão / autonômo do setor criativo.</ModalInputText>
                </ModalCheckbox>
              </ModalInputs>

              <Link  onClick={()=>setModal(false)} to="/loja">
                <ModalButton>Solicitar Cadastro</ModalButton>
              </Link>      
            </ModalContainer>                       
        </Modal>

       
    </Container>
    
  );
}

export default Profile;
