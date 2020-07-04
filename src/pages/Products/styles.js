import styled from 'styled-components';



export const Container = styled.div`
    display: flex;    
    flex-direction: column;  
    height:100%;  
    background: #EBEBEB;
    
`; 

export const SliderSmall = styled.div`
    width: 100;
    height: 241px;
    background: #1F6CDB;
    
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
    margin-left:100px;
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
    margin-left: 150px;
   
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

export const ProductImage = styled.img`
    

`;

export const Bar = styled.div`  
   width: 283.92px;
    height: 2.54px;
    background: #EAEAEA;
    margin-top:260px;
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

export const ProductUser = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    align-items:center;
    width: 284px;
    height: 47px;
    background: #1F6CDB;
    border-radius: 3px; 
    margin-top:150px;
   
`; 
export const ImageContainer = styled.div`  
    width: 52px;
    height: 52px;
    border: 1px solid;
    border-color:#1F6CDB;
    border-radius: 30px;
    background-color:#FFF;
    margin-bottom:20px;
    
`; 

export const UserImage = styled.img`  
        
`; 

export const UserName = styled.p`  
   font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.015em;
    margin-right:20px;
    color: #FFFFFF;
`; 