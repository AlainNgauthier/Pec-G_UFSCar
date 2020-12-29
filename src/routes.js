import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/NavBar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
// Pages
import Home from './Components/Pages/Home';
import Erro from './Components/Pages/Erro';
import Cronologia from './Components/Pages/Cronologia';
import Formados from './Components/Pages/Formados';
// import SobrePecg from './Components/SobrePecg';

const Routes = () => {
    // 
    const[isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };
    // 
    return(
        <BrowserRouter>
            <Navbar toogle={toogle} />
            <Sidebar isOpen={isOpen} toogle={toogle} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/crono" component={Cronologia} />
                <Route exact path="/formados" component={Formados} />
                <Route exact path="*" component={Erro}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routes;