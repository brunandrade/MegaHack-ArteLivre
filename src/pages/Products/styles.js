import styled from 'styled-components';



export const Container = styled.div`
    display: flex;    
    flex-direction: column;  
    height:100%;  
    background: #EBEBEB;
    
`; 

export const SliderSmall = styled.div`
    width: 100%;
    height: 241px;
    display: flex; 
    align-items: center;
    justify-content: center;   
    
`; 

export const SliderImage= styled.img`

`;


export const Content = styled.div`
    display: flex;   
    flex-direction: row;
    background: #EBEBEB;
`; 

export const ArtMenu = styled.div`
    display: flex;   
    flex-direction: column;
    padding:20px;
    margin-left:210px;
`; 

export const Title = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 0.015em;

    color: #000000;
`; 

export const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.015em;
    margin-bottom:20px;
    color: #6C6C6C;
`; 

export const MenuSide = styled.div`
    width:200px;

`; 

export const MenuContent = styled.div`
    display: flex;   
    flex-direction: column;   
`; 

export const MenuText = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.015em;
    color: #000000;
    margin-bottom:10px;
`; 

export const MenuItem = styled.button`  
    display:flex;
    background: transparent;
    border:0;   
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #6C6C6C;    
    margin-left:10px;
    &:hover {
        opacity:0.6;
    } 
`; 

export const MenuButton = styled.button`
    display:flex;
    background: transparent;
    border:0;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.015em;
    margin-bottom:20px;
    color: #5697FA;
    margin-top:10px;
    margin-left:10px;

    &:hover {
        opacity:0.6;
    } 
`; 

export const ArtContainer = styled.div`
    display: flex;   
    margin-left: 5px;
   
`; 

export const ProductContainer = styled.div`  
   width: 284px;
   height: 510px;
   background: #FFFFFF;
   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
   border-radius: 3px;
   margin-top: 40px;
   margin-left: 20px;
  
`; 

export const ProductImageContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    margin-top:30px;
`;

export const ProductImage = styled.img`
    width: 200px;
    height: 200px;
`;

export const Bar = styled.div`  
   width: 283.92px;
    height: 2.54px;
    background: #EAEAEA;
    margin-top:20px;
`; 

export const ProductPrice = styled.p`  
   font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 0.015em;
    padding:20px;
    color: #333333;
`; 
export const ProductName= styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    padding: 0 20px;
    width:300px;
`;


export const ProductUser = styled.div` 
    position:absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;   
    align-items:center;
    width: 284px;
    height: 47px;
    background: #1F6CDB;
    border-radius: 3px; 
    margin-top:100px;
   
`; 
export const ImageContainer = styled.div`  
    margin-bottom: 20px;  
    
`; 

export const UserImage = styled.img`  
    width: 110px;
    height: 110px;    

`; 

export const UserName = styled.p` 
    position:absolute; 
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: 0.015em;
    padding:0 100px;
    color: #FFFFFF;
    text-transform: capitalize;
`; 

export const ModalContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 575px;
    height: 464px;
    background: linear-gradient(359.47deg, #FFCC00 8.73%, rgba(255, 255, 255, 0) 147.11%), #FFFFFF;
    border-radius: 6px;
    align-items: center; 
    justify-content: space-between;
    position: absolute;
    top: 25%;
    left: 35%;    
`; 


export const ModalTitle = styled.div`
    display: flex;
    flex-direction:row;    
`;

export const ModalCloseButton = styled.div`
    position: absolute;
     margin-left:320px;
     margin-top:10px;
`;

export const ModalLogo = styled.img`
    margin-top:20px;
    width: 164.57px;
    height: 192.63px;
    
`; 

export const ModalDescription = styled.p`
    width: 444px;
    height: 229px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 125.69%;
    text-align: center;
    letter-spacing: 0.015em;
    color: #000000;
`;
