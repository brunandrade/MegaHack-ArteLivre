import React, {useEffect, useState} from 'react';
import{Link} from 'react-router-dom';
import user from '../../assets/artelivre.png';
import logo from '../../assets/artelivre.png';
import banner2 from '../../assets/banner2.jpg';
import icon from '../../assets/logoIcon.png';
import HeaderComponent from '../Components/HeaderComponent'
import Modal from 'react-modal';
import {FiXCircle} from 'react-icons/fi';
import {Container, SliderSmall, Content, ArtMenu, ArtContainer, Title, Description, ProductImage,ProductImageContainer,
  MenuSide, MenuItem, MenuButton, MenuText, MenuContent, ProductContainer, Bar, ProductPrice, ProductUser,
   UserImage,UserName, ImageContainer,ProductName, SliderImage, ModalContainer, ModalTitle, ModalLogo,ModalCloseButton, ModalDescription} from'./styles';
  import api from '../services/ml';


function Products() {
  //CONSTANTS
  const [dadosCategoria, setDadosCategoria] = useState([]);
  const [modal, setModal] = useState(true);

  //FUNCTIONS
  async function getSeller(seller_id) { 
    const result = await api.get('/search?seller_id='+ seller_id);
    return (result.data.seller.nickname);
  }

  //useEffects
  useEffect(() => {
    async function fetchData() {
      var result = []
      result = await api.get('/search?category=MLB1368&limit=4');
        result.data.results.map( async function(product) {
          product.sellerNickname = await getSeller(product.seller.id);
        })
        setDadosCategoria(result.data.results);   
        console.log(dadosCategoria);
    }
    fetchData();
  }, [dadosCategoria.length]);

  return (
      <Container>
          <HeaderComponent/>

          <SliderSmall>
            <SliderImage src={banner2}/>
          </SliderSmall>
         


        <Content>
          <ArtMenu>
            <Title>Arte Livre</Title>
            <Description>300 resultados</Description>

            <MenuSide>
              <MenuContent>
                <MenuText>Localização</MenuText>
                
                <MenuItem>São Paulo (100)</MenuItem>
                <MenuItem>Rio de Janeiro (75)</MenuItem>
                <MenuItem>Salvador (70)</MenuItem>
                <MenuItem>Paraná (40)</MenuItem>
                <MenuItem>Minas Gerais (32)</MenuItem>
                <MenuButton>Ver todos</MenuButton>
              </MenuContent>
              
              <MenuContent>
                <MenuText>Lojas</MenuText>
                <MenuItem>Gab Studio</MenuItem>
                <MenuItem>Flores artesanato</MenuItem>
                <MenuItem>2B Cadernos</MenuItem>
                <MenuButton>Ver todos</MenuButton>
              </MenuContent>
             
              <MenuContent>
                <MenuText>Categorias</MenuText>
                <MenuItem>Quadros</MenuItem>
                <MenuItem>Ecobags</MenuItem>
                <MenuItem>Roupas</MenuItem>
                <MenuItem>Bolsas</MenuItem>
                <MenuItem>Pinturas</MenuItem>
                <MenuItem>Esculturas</MenuItem>
                <MenuButton>Ver todos</MenuButton>
              </MenuContent>
              
            </MenuSide>         
          </ArtMenu>

          <ArtContainer>
            {dadosCategoria.map( product =>(              
              <ProductContainer key={product.id}>
                <ProductImageContainer>
                  <ProductImage src={product.thumbnail} alt="produto"/>
                </ProductImageContainer>
            
              <Bar/>
              <ProductPrice>R$ {product.price}</ProductPrice>
              <ProductName>{product.title}</ProductName>

              <ProductUser>
                  <ImageContainer>
                      <UserImage src={icon} alt="produto"/>
                  </ImageContainer>
                  <UserName>{product.sellerNickname}</UserName>
              </ProductUser>

              </ProductContainer>

            ))
            }
            

            
            
          </ArtContainer>
        </Content>

        
      <Modal className="modal" isOpen={modal} onRequestClose={()=> setModal(false)}>
            <ModalContainer>
              <ModalTitle>
                <ModalLogo src={logo}/>
                <ModalCloseButton>
                  <Link  onClick={()=>setModal(false)} to="/artelivre">
                      <FiXCircle size={30} color="black"/>
                  </Link>
                </ModalCloseButton>               
              </ModalTitle>
              <ModalDescription>Ao mesmo tempo em que eventos, feiras e a circulação de pessoas nas ruas reduziu, o consumo de arte começou a aumentar. Muitos profissionais vendiam seus trabalhos nas ruas e agora estão impedidos de fazer isso, pensando nisso, surgiu o Arte Livre, que tem como propósito promover os trabalhos de artistas de todos os lugares do Brasil e assim criar uma nova fonte de renda para eles. 
              Contribua com o trabalho de um artista brasileiro e mantenha vivo o sonho dele!</ModalDescription>               
                  
            </ModalContainer>                       
        </Modal>


      </Container>
  );
}

export default Products;
