import React, {Component} from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import logo from '../../../assets/logo.svg';
import freteIcon from '../../../assets/freteIcon.svg';
import location from '../../../assets/location.svg';

import {Header, HeaderContent, MenuContent, Logo, SearchBar, SearchInput, SearchButton, HeaderInfo, 
    InfoIcon, InfoText, LocationInfo, LocationIcon, LocationText, Menu, MenuItem, MenuItemPrincipal,UserInfo, UserInfoItem, 
    LocationIconContainer, LocationTextCity} from'./styles';


class HeaderComponent extends Component{
    render(){
        return(
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
          <LocationIconContainer>
              <LocationText>Enviar para</LocationText>              
              <LocationTextCity>Salvador 00000000</LocationTextCity>
          </LocationIconContainer>
           
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
            <FiShoppingCart size={20} color="#000000"/>
          </UserInfo>

        </MenuContent>
    </Header>
        )
        
    }
}

export default HeaderComponent;