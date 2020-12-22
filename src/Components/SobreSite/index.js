import React from 'react';
import { Link } from 'react-router-dom';
import './SobreSite.css';

import Anos50UFSCar from '../Assets/Images/50ufscar.jpg';
import UFSCarPhoto from '../Assets/Images/logoUfscar.jpg';
//import PECG from '../Assets/Images/pec-g.png';

const SobreSite = () => {
    return(
        <div className="about" id="sobre">
            <div className="about__content-primary">
                <p>
                Este site é fruto da atividade de extensão 
                "Entre Continentes: a presença do Programa 
                de Estudantes- Convênio de Graduação (PEC-G) na UFSCar", 
                de autoria/coordenação da pedagoga Eliana Marques Ribeiro Cruz (CAAPE/ProGrad), 
                no contexto das comemorações dos 50 anos da UFSCar.
                </p>
                <p>
                O site foi desenvolvido pelo estudante PEC-G Alain Gauthier Ndamwey Djamba, 
                da República Democrática do Congo, do curso Ciência da Computação, 
                com o apoio da Secretaria de Informática da Universidade. A atividade de extensão 
                contou com a colaboração dos demais estudantes estrangeiros(as) 
                e servidores(as) técnicos e docentes.
                </p>
                <hr/>
                <div className="about__content-second">
                    <Link to={{ pathname: "https://www.50anos.ufscar.br/" }} target="_blank">
                        <img src={Anos50UFSCar} alt="50anos" title="50 anos UFSCar"/>
                    </Link>
                    <Link to={{ pathname: "https://www2.ufscar.br/" }} target="_blank">
                        <img src={UFSCarPhoto} alt="USFCar" title="Site oficial UFSCar" />
                    </Link>
                    {/* <img src={PECG} alt="pecg" title="PEC-G"/> */}
                </div>
            </div>
            
            
        </div>
    );
}
export default SobreSite;