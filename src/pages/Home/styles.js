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
    justify-content:center;
    align-items:center;
        
`; 

export const LocationInfo = styled.div`
        
`; 

export const LocationIcon = styled.img`
        
`; 


export const LocationText = styled.div`
        
`; 


export const Menu = styled.div`
        
`; 

export const MenuItem = styled.button`

    background-color: Transparent;
    border: none;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #656565;
        
`; 
export const MenuItemPrincipal = styled.button`

    background: #1F6CDB;
    border-radius: 3px;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #FFF;
        
`; 

export const UserInfo = styled.div`
        
`; 

export const UserInfoItem = styled.button`

    background-color: Transparent;
    border: none;
    
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #070707;
`; 