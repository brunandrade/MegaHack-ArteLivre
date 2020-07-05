import React from 'react';
import logo from '../../assets/artelivre.png';
import user from '../../assets/userImage.svg';
import HeaderComponent from '../Components/HeaderComponent'
import { FiGlobe, FiSidebar, FiMessageCircle, FiStar, FiArchive} from 'react-icons/fi';
import {Container,Content,ContentHeader ,Title, HelpButton, ShopContainer, SalesContainer, ArteLivreButton, ArteLogo,
  ShopProfile, ShopIcon, ShopName, Bar, ShopInfo, ShopImage, Info, InfoText, SalesHeader, SalesTitle, SalesBar, SalesInfo, SaleData, Quantity, SalesDataBar, DataTitle} from'./styles';
function Profile() {
  return (
    <Container>
      <HeaderComponent />

      <Content>
        <ContentHeader>
          <Title>Mercado Shops</Title>

          <ArteLivreButton>
            <ArteLogo src={logo}/>
            Junte-se ao Arte Livre
            </ArteLivreButton>
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
              <DataTitle>Visitas</DataTitle>
              <Quantity>100</Quantity>
            </SaleData>
            <SalesDataBar/>

            <SaleData>
              <DataTitle>Conversões</DataTitle>
              <Quantity>20</Quantity>
            </SaleData>
            <SalesDataBar/>

            <SaleData>
              <DataTitle>Taxa de conversão</DataTitle>
              <Quantity>35%</Quantity>
            </SaleData>
           
          </SalesInfo>



        </SalesContainer>
      </Content>
    </Container>
    
  );
}

export default Profile;
