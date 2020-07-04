import styled from 'styled-components';



export const Container = styled.div`
    display: flex;

`; 

export const Header = styled.div`
    display: flex;
    width:100%;
    height: 103px;
    background: #FFF159;
    flex-direction: column;
`; 


export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-around;
    margin-top:20px;
`; 

export const Logo = styled.img`
        
`; 

export const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    width: 598px;
    height: 37px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);   
    
`; 

export const SearchInput = styled.input`
    border:0;
    align-items: center;
    padding: 10px;
    width: 550px;
    height: 37px;
`; 

export const SearchButton = styled.button`
     background: #FFFFFF;
     border:0;      
     align-items: center;   
     &:hover {
        opacity:0.6;
    } 
`;

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
`;

export const InfoIcon = styled.img`
    margin-Right: 10px;
        
`;

export const InfoText = styled.text`
    margin-Right:10px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
`;


export const MenuContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    padding: 0 50px;
    margin-top: 10px;
    margin-right:110px;
    margin-left:90px;
        
`; 

export const LocationInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
`; 

export const LocationIconContainer = styled.div`
    display: flex;
    flex-direction: column; 
`; 


export const LocationIcon = styled.img`
        width: 16.67px;
        height: 25px;
        margin-right:5px;
`; 


export const LocationText = styled.div`
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
`; 

export const LocationTextCity = styled.div`
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
`; 


export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
`; 

export const MenuItem = styled.button`

    background-color: Transparent;
    border: 0;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #656565;
    margin-right: 30px;

    &:hover {
        opacity:0.6;
    } 
        
`; 
export const MenuItemPrincipal = styled.button`
    width: 73px;
    height: 18px;
    background: #1F6CDB;
    border-radius: 3px;
    border:0;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #FFF;

    &:hover {
        opacity:0.6;
    } 
        
`; 

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;   
`; 

export const UserInfoItem = styled.button`

    background-color: Transparent;
    border:0;
    margin-right: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #070707;

    &:hover {
        opacity:0.6;
    } 
`; 