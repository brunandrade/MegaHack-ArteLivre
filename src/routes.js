import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/index';
import Products from './pages/Products/index';
import Profile from './pages/Profile/index';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Home}/>
                <Route path="/artelivre" component={Products}/>
                <Route path="/loja" component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}