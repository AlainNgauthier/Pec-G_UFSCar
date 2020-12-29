import React from 'react';
import { Link } from 'react-router-dom';
import './SobreSite.css';

import Anos50UFSCar from '../Assets/Images/50ufscar.jpg';
import UFSCarPhoto from '../Assets/Images/logoUfscar.jpg';
import PECG from '../Assets/Images/pec-g.png';

const SobreSite = () => {
    return(
        <div className="about" id="sobre">
            <div className="about-pecg">
                <p>
                    O Programa de Estudantes Convênio de Graduação é um dos programas 
                    internacionais mais antigos da UFSCar, sendo um acordo internacional 
                    com países do continente Africano, América do Sul e América Central. 
                    Este Programa tem um grande impacto nos países dos continentes citados, 
                    pois a UFSCar forma uma parte significativa de seus quadros profissionais, 
                    principalmente, especializados e de liderança.
                </p>
                <p>
                    Por sua tradição e por fazer parte da história desses 50 anos da nossa instituição, 
                    o Programa não poderia ficar de fora, não é? Para além de sua importância institucional, 
                    o PEC-G possui como uma de suas características nos revelar a riqueza da diversidade 
                    cultural trazida pelos(as) estudantes que cursam suas graduações na UFSCar.
                     <br/>
                    Esses(as) estudantes são pessoas de diferentes lugares do mundo, com marcas culturais
                    presentes nas diferentes línguas, na culinária, na música, nas festividades, nas religiões, 
                    nos modos de se relacionarem, nos conhecimentos e de visões de mundo. Tudo isso ao nosso lado. 
                    Em nossas salas de aula e nos mais diversos espaços de nossa universidade e fora dela. 
                    Esses(as) estudantes estão nas cidades onde os campi UFSCar estão, convivendo para 
                    além dos "muros" da instituição.
                </p>
                <p>
                    Mas, o que você sabe sobre a história do PEC-G e como ele funciona na UFSCar? 
                    Sabe de quais países vieram os (as) estudantes desse convênio? Conhece suas trajetórias na UFSCar? 
                    No que atuam, profissionalmente, hoje, esses(as) formados(as) pela UFSCar? Ficou curioso(a)? 
                    Venha passear pelo site para conhecer tudo isso. 
                    Pegue sua mochila. Escolha seu assento para iniciar a viagem. Prepare os olhos, a mente e o coração.
                </p>
                <span className="bom-passeio" >Bom passeio "entre Continentes"!</span>
                <span className="logo-pecg" >
                    <img src={PECG} alt="logo-pecg" />
                </span>
            </div>
                
                <div className="about__content-primary"> 
                    <hr/>      
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