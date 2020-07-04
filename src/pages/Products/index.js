import React, {useEffect, useState} from 'react';
import user from '../../assets/artelivre.png';
import HeaderComponent from '../Components/HeaderComponent'
import {Container, SliderSmall, Content, ArtMenu, ArtContainer, Title, Description, ProductImage,ProductImageContainer,
  MenuSide, MenuItem, MenuButton, MenuText, MenuContent, ProductContainer, Bar, ProductPrice, ProductUser, UserImage,UserName, ImageContainer,ProductName} from'./styles';
  import api from '../services/ml';


function Products() {
  //CONSTANTS
  const [dadosCategoria, setDadosCategoria] = useState([]);


  //useEffects
  useEffect(() => {
    async function fetchData() { 
      const result = await api.get('/search?category=MLB1368&limit=4');
        setDadosCategoria(result.data.results);   
        console.log(dadosCategoria);
    }
    fetchData();
  }, [dadosCategoria.length]);

  return (
      <Container>
          <HeaderComponent/>
          <SliderSmall/>

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
                  <UserImage src={user} alt="produto"/>
                </ImageContainer>
                <UserName>Nome</UserName>
              </ProductUser>
              </ProductContainer>

            ))
            }
            

            
            
          </ArtContainer>
        </Content>


      </Container>
  );
}

export default Products;
