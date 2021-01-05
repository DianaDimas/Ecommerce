import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {Switch, Route} from "react-router-dom"
import Home from '../Home/Home'
import Quienes from '../Quienes/Quienes';

const Main = ({greeting}) => {

    return(
        <main>
            <Switch>

                <Route path="/" exact>
                    <Home greeting="BIENVENIDO"/>
                </Route>

                <Route path="/quienesSomos">
                    <Quienes />
                </Route>

                <Route path="/category/:categoryName?">
                    <ItemListContainer/>
                </Route>

                <Route exact path = "/item/:productId">
                    <ItemDetailContainer />
                 </Route>
                
                <Route path="/contacto">
                    
                </Route>

                <Route path="/cart">
                    
                </Route>

            </Switch>

        </main>
    )
}


export default Main;
