import styled from 'styled-components';

export const Container = styled.div`
    display: flex;    
    flex-direction: column;  
    align-items:center;
    height:100%;  
    background: #EBEBEB;
    
`; 

export const Content = styled.div`
    display: flex;    
    flex-direction: column;      
    height:100%;  
    background: #EBEBEB;
    margin-top:60px;   
    
`; 

export const ContentHeader = styled.div`
    display: flex;    
    flex-direction: row;  
    align-items:center;
    justify-content:space-between;
    margin-bottom:40px;
    
`; 

export const Title = styled.p`
    font-family: Roboto;
    font-weight:bold;
    font-size:22px;
`; 

export const HelpButton = styled.button`
    background: transparent;
    border:0;
    color: #1F6CDB; 
    font-family: Roboto;
    font-size:14px;

    &:hover {
        opacity:0.6;
    } 
    
`; 
export const ArteLogo = styled.img`
    height:52px;
    width:52px;
    padding:5px;
    
`; 

export const ArteLivreButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #1F6CDB;
    height: 60px;
    width:300px;
    border-radius: 6px;
    border:0;
    color: #FFF;
    font-style: normal;
    font-family: Roboto;
    font-weight: bold;
    font-size:16px;
    padding:20px;

    &:hover {
        opacity:0.6;
    } 
    
`; 



export const ShopContainer = styled.div`
    display: flex;   
    flex-direction: row;
    align-items: center;
    padding:10px;
    width: 1180px;
    height: 150px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-bottom: 30px;
`; 



export const ShopProfile = styled.div`
    display: flex;   
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
`; 

export const ShopIcon = styled.div`
    height:100px;
    width:100px;
    border-radius:100px;
    border:3px solid;
    border-color: #1F6CDB;
`; 

export const ShopImage = styled.img`
    height:100px;
    width:100px;
    padding:10px;
`; 

export const ShopName = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 33px;
    padding:0 20px;
`; 

export const Bar = styled.div`
    background: #EAEAEA;
    height:120px;
    width:1px;
`; 


export const ShopInfo = styled.div`
    display: flex;   
    flex-direction: row;
    align-items: center;
`; 

export const Info = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
`; 

export const InfoText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 33px;
    padding:0 20px;
`; 

export const SalesContainer = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    padding:10px;
    width: 1180px;
    height: 400px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-bottom: 159px;
`; 
export const SalesHeader = styled.div`
    display: flex;   
    flex-direction: column;        
`;

export const SalesTitle = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    padding:0 20px;
    
`; 

export const SalesBar = styled.div`
    background: #EAEAEA;
    height:1px;
    width: 1160px;
    
`; 

export const SalesInfo = styled.div`
    display: flex;   
    justify-content:start;
    padding:20px;
    flex-direction: row;   
`; 

export const SaleData = styled.div`
    display: flex;   
    flex-direction: column;    
    padding:0 10px; 
    
`; 

export const SalesDataHeader = styled.div`
    display: flex;   
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-right:220px;   
`; 

export const DataTitle = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 33px;  
    padding: 0 10px;  
   
`; 

export const Quantity = styled.p`
   font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 33px;
    padding: 0 10px;  
   
`; 

export const SalesDataBar = styled.div`
    background: #EAEAEA;
    height:300px;
    width:1px;
    
`; 

export const ModalContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 440px;
    height: 718.44px;
    background: #1F6CDB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center; 
    justify-content: space-between;
    border-radius: 14px;
    position: absolute;
    top: 10%;
    left: 40%;    
`; 


export const ModalTitle = styled.div`
    display: flex;
    flex-direction:row;    
`;

export const ModalCloseButton = styled.div`
    position: absolute;
     margin-left:250px;
     margin-top:10px;
`;

export const ModalLogo = styled.img`
    margin-top:20px;
    width: 146.09px;
    height: 171.88px; 
    
`; 

export const ModalInputs = styled.div`
    display: flex;
    flex-direction:column;  
    padding: 10px;  
`; 

export const ModalInputText = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 125.69%;
    letter-spacing: 0.015em;
    margin-bottom: 10px;
    color: #FFFFFF;


`;

export const ModalSelect = styled.select`
    width: 335.16px;
    height: 39.53px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    border:0;
    margin-bottom:20px;
    font-family: Roboto; 
    font-size: 14px;
    padding:10px;
   
`;

export const Option = styled.option`
    font-family: Roboto;
    font-style: normal;
  
`;

export const ModalDescription = styled.textarea`
    background: #FFFFFF;
    width: 335.16px;
    height: 216.56px;
    border:0;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom:20px;
    padding:10px;
`;

export const ModalCheckbox = styled.div`
    display: flex;
    flex-direction:row;  
   
`;

export const Check = styled.input`
    width: 17.19px;
    height: 18.91px;
    border:0;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-right: 10px;
   
`;

export const ModalButton = styled.button`
   width: 199.38px;
    height: 34.38px;
    border:0;
    background: #FFCC00;
    /* sombra */
    margin-bottom:20px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 125.69%;
    /* or 18px */

    text-align: center;
    letter-spacing: 0.015em;

    &:hover {
        opacity:0.8;
    } 
   
`;


