import React from 'react';
import { Link } from 'react-router-dom';
import './formados.css';

const Formados = () => {
    return(
        <div className="formados" id="formados" >
            <div className="formados__content" >
                <div className="formados__content-campi " >
                    <h2>São Carlos</h2>
                    <p>
                        O campus São Carlos recebeu os primeiros
                        estudantes na década de 1970, tornando-se um dos primeiros acordos
                        internacionais da UFSCar. Os estudantes PEC-G estão presentes, principalmente,
                        nos cursos das áreas de Exatas e de Saúde. Até 2020, foram formados(as) no cãmpus São Carlos
                        147 estudantes nos seguintes cursos: Medicina, Fisioterapia, Terapia Ocupacional, Enfermagem, Engenharia de
                        Produção, Engenharia de Computação, Engenharia Civil, Engenharia Química,
                        Engenharia de Materiais, Engenharia Física, Biotecnologia, Ciência da Computação,
                        Física, Química, Ciências Biológica, Ciências Sociais, Psicologia e Filosofia. 
                    </p>
                    <div className="btn">
                        <Link 
                            className="link--enabled" 
                            to="/formados_saocarlos">
                            <h3>
                                Formados de São Carlos
                            </h3>
                        </Link>
                    </div>
                </div>
                <div className="formados__content-campi " >
                    <h2>Araras</h2>
                    <p>
                        O primeiro ingresso de PEC-G no campus Araras ocorreu em 1994.
                        Recebeu, até o momento, estudantes dos seguintes países: Benin e Cabo Verde (Continente Africano),
                        Bolívia, Paraguai e Peru (América Latina). Formaram-se, até o momento, 6 estudantes,
                        nos cursos de Engenharia Agronômica e de Biotecnologia.
                    </p>
                    <div className="btn">
                        <Link 
                            className="link--enabled"
                            to="/formados_araras">
                            <h3>
                                Formados de Araras
                            </h3>
                        </Link>
                    </div>
                </div>
                <div className="formados__content-campi " >
                    <h2>Sorocaba</h2>
                    <p>
                        O primeiro ingresso de PEC-G no campus Sorocaba ocorreu em 2008. Recebeu, até 2020,
                        estudantes de: Guiné-Bissau, República Democrática do Congo, Angola, São Tomé e Príncipe (Continente Africano),
                        Bolívia, Paraguai e Peru (América Latina) e Jamaica (América Central). Esses estudantes desenvolveram atividades
                        de palestras nas escolas e no próprio campus. Já se formaram 5 estudantes nos cursos de 
                        Administração, Ciências Econômicas, Engenharia de Produção e Turismo.
                    </p>
                    <div className="btn">
                        <Link 
                            className="link--enabled" 
                            to="/formados_sorocaba">
                            <h3>
                                Formados de Sorocaba
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Formados;