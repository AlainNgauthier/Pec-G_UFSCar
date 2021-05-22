import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/NavBar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

import Home from './Components/Pages/Home';
import Erro from './Components/Pages/Erro';
import Cronologia from './Components/Pages/Cronologia';
import Formados from './Components/Pages/Formados';
import Formados_SaoCarlos from './Components/Pages/Formados-sc';
import Formados_Araras from './Components/Pages/Formados-araras';
import Formados_Sorocaba from './Components/Pages/Formados-sorocaba';

const Routes = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <BrowserRouter>
            <Navbar toogle={toogle} />
            <Sidebar isOpen={isOpen} toogle={toogle} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/crono" component={Cronologia} />
                <Route exact path="/formados" component={Formados} />
                <Route exact path="/formados_saocarlos" component={Formados_SaoCarlos} />
                <Route exact path="/formados_araras" component={Formados_Araras} />
                <Route exact path="/formados_sorocaba" component={Formados_Sorocaba} />
                <Route exact path="*" component={Erro}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes;