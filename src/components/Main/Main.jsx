import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {Switch, Route} from "react-router-dom"
import Home from '../Home/Home'
import Quienes from '../Quienes/Quienes';
import Cart from '../Cart/Cart'

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
                
                <Route path="/cart">
                    <Cart/>
                </Route>

            </Switch>

        </main>
    )
}


export default Main;
