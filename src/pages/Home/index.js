import React from 'react';
import HeaderComponent from '../Components/HeaderComponent'
import {Container,Slider, PaymentInfo, Content, PaymentContainer, PaymentText, PaymentDescription,PaymentButton, 
  BlueBar,GrayBar, PaymentContent, HistoryText, HistoryButton, ProductContainer, HistoryTitle, Product, ProductBar, ProductPrice, ProductPriceText} from'./styles';

function Home() {
  return (
      <Container>
          <HeaderComponent/>

        <Slider>

        </Slider>

        <Content>
          <PaymentInfo>
            <BlueBar/>
            <PaymentContent>
              <PaymentContainer>
                  <PaymentText>Pagamento rápido e seguro</PaymentText>
                  <PaymentDescription>com Mercado Pago</PaymentDescription>
                </PaymentContainer>
                <GrayBar/>

                <PaymentContainer>
                  <PaymentText>Até 12 vezes sem juros</PaymentText>
                  <PaymentButton>Ver mais</PaymentButton>
                </PaymentContainer>

                <PaymentContainer>
                  <PaymentText>À vista no boleto bancário</PaymentText>
                  <PaymentButton>Ver mais</PaymentButton>
                </PaymentContainer>

                <PaymentContainer>
                  <PaymentText>Mais formas de pagamento</PaymentText>
                  <PaymentButton>Ver mais</PaymentButton>
                </PaymentContainer>
            </PaymentContent>
              
              

          </PaymentInfo>

          <HistoryTitle>
            <HistoryText>Baseada na sua última visita</HistoryText>
            <HistoryButton>Ver histórico</HistoryButton>
          </HistoryTitle>
          
          <ProductContainer>
            <Product>
              <ProductBar/>
              <ProductPrice>
                <ProductPriceText>R$ 30,00</ProductPriceText>              
              </ProductPrice>
            </Product>

            <Product>
              <ProductBar/>
              <ProductPrice>
                <ProductPriceText>R$ 30,00</ProductPriceText>              
              </ProductPrice>
            </Product>

            <Product>
              <ProductBar/>
              <ProductPrice>
                <ProductPriceText>R$ 30,00</ProductPriceText>              
              </ProductPrice>
            </Product>

            <Product>
              <ProductBar/>
              <ProductPrice>
                <ProductPriceText>R$ 30,00</ProductPriceText>              
              </ProductPrice>
            </Product>

            <Product>
              <ProductBar/>
              <ProductPrice>
                <ProductPriceText>R$ 30,00</ProductPriceText>              
              </ProductPrice>
            </Product>
            
            
          </ProductContainer>
        </Content>        

      </Container>
  );
}

export default Home;
