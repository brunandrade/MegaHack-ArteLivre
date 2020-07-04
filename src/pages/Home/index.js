import React, { useState, useEffect } from 'react';
import banner from '../../assets/banner.jpg';
import HeaderComponent from '../Components/HeaderComponent'
import {Container,Slider, PaymentInfo, Content, PaymentContainer, PaymentText, PaymentDescription,PaymentButton, ProductName,ProductImageContainer,ProductImage,
  BlueBar,GrayBar, PaymentContent, HistoryText, HistoryButton, ProductContainer, HistoryTitle, Product, ProductBar, ProductPrice, ProductPriceText, SliderImage} from'./styles';
import api from '../services/ml';

function Home() {
  const [product, setProduct] = useState([]);


  //useEffects
  useEffect(() => {
    async function fetchData() { 
      const result = await api.get('/search?category=MLB1051&limit=5');
      setProduct(result.data.results);   
        console.log(product);
    }
    fetchData();
  }, [product.length]);


  return (
      <Container>
          <HeaderComponent/>

        <Slider>
          <SliderImage src={banner}/>
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
          <ProductContainer >
          {product.map(item=>(                
                <Product key={item.id}>
                   <ProductImageContainer>
                    <ProductImage src={item.thumbnail} alt="produto"/>
                  </ProductImageContainer>

                  <ProductBar/>

                  <ProductPrice>
                    <ProductPriceText>R$ {item.price}</ProductPriceText>              
                  </ProductPrice>
                  <ProductName>{item.title}</ProductName>
                </Product>                  
             
          ))}
         </ProductContainer>

        </Content>        

      </Container>
  );
}

export default Home;
