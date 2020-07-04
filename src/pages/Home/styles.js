import styled from 'styled-components';



export const Container = styled.div`
    display: flex;    
    flex-direction: column;  
    height:100%;  
    background: #EBEBEB;
    
`; 

export const Slider = styled.div`
    display: flex;   
    align-items:center; 
    justify-content:center;  
    width: 100%;
    height: 336px;
    
`; 

export const SliderImage= styled.img`

`;


export const Content = styled.div`
    display: flex;   
    flex-direction: column;
    background: #EBEBEB;
    align-items: center;
    margin-top:40px;
`; 

export const PaymentInfo = styled.div`
    display: flex;   
    flex-direction: row;
    align-items: center;
    padding:10px;
    width: 1180px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 40px;
`; 

export const PaymentContent = styled.div`
    display: flex;  
    flex-direction: row;
    align-items: center;   
    
`; 


export const BlueBar = styled.div`
    width: 4px;
    height: 83px;
    background: #3483FA;
    margin-right:60px;
`; 

export const GrayBar = styled.div`

`; 

export const PaymentContainer = styled.div`
    margin-right:60px;
    padding:10px;
`; 

export const PaymentText= styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: #000000;
`; 

export const PaymentDescription= styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.015em;
    color: #999EA9;
`; 

export const PaymentButton = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    border:0;
    background:transparent;
    color: #5697FA;

    &:hover {
        opacity:0.6;
    } 

`; 


export const HistoryText= styled.p`
   font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.015em;

    color: #6D6D6D;
`; 

export const HistoryTitle= styled.div`
    display: flex;  
    flex-direction: row;
    margin-right:760px;
    margin-bottom: 30px;
`;


export const HistoryButton= styled.button`
   font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;  
    letter-spacing: 0.015em;
    color: #5697FA;
    border:0;
    margin-left:10px;
    

    &:hover {
        opacity:0.6;
    } 

`; 

export const ProductContainer= styled.div`
    display: flex;  
    flex-direction: row;
   
`;

export const Product= styled.div`
    margin-Right: 10px;
    width: 224px;
    height: 314px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 40px;   
`;


export const ProductBar= styled.div`
    margin-top: 10px;
    width: 224px;
    height: 2px;
    background: #EAEAEA;

`;

export const ProductPrice= styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    padding:10px;
`;



export const ProductPriceText= styled.p`

`;

export const ProductName= styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    padding: 0 10px;
   
   
`;

export const ProductImageContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    margin-top:30px;
`;

export const ProductImage = styled.img`
    width: 150px;
    height: 150px;
`;





