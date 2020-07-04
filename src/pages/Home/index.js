import React from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import freteIcon from '../../assets/freteIcon.svg';
import location from '../../assets/location.svg';

import {Container, Header, HeaderContent, MenuContent, Logo, SearchBar, SearchInput, SearchButton, HeaderInfo, 
  InfoIcon, InfoText, LocationInfo, LocationIcon, LocationText, Menu, MenuItem, MenuItemPrincipal,UserInfo, UserInfoItem} from'./styles';

function Home() {
  return (
      <Container>
        <Header>
            <HeaderContent>
              <Logo src={logo} alt="Mercado Livre"/>

              <SearchBar>
                <SearchInput placeholder="Buscar produtos, marcas e muito mais..." />
                <SearchButton>
                  <FiSearch size={22} color="#ABABAB"/>
                </SearchButton>               
              </SearchBar>

              <HeaderInfo>
                <InfoIcon src={freteIcon}/>
                <InfoText>Frete grátis pelo Mercado Pontos</InfoText>
              </HeaderInfo>
            </HeaderContent>

            <MenuContent>
              <LocationInfo>  
                <LocationIcon src={location} alt="Localização"/>
                <LocationText>Enviar para</LocationText>
                <LocationText>Salvador 00000000</LocationText>
              </LocationInfo>

              <Menu>               
                <MenuItem>Categorias</MenuItem>
                <MenuItem>Ofertas</MenuItem>
                <MenuItem>Histórico</MenuItem>
                <MenuItem>Supermercado</MenuItem>
                <MenuItem>Lojas Oficiais</MenuItem>
                <MenuItem>Vender</MenuItem>
                <MenuItem>Contato</MenuItem>
                <MenuItemPrincipal>Arte Livre</MenuItemPrincipal>              
              </Menu>

              <UserInfo>
                <UserInfoItem>Crie a sua conta</UserInfoItem>
                <UserInfoItem>Entre</UserInfoItem>
                <UserInfoItem>Compras</UserInfoItem>
                <FiShoppingCart/>
              </UserInfo>

            </MenuContent>
        </Header>
      </Container>
  );
}

export default Home;
