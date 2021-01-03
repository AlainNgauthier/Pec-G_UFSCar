import React from 'react';
import '../Formados-sc/formados-sc.css';
import Jesus from '../../Assets/Images/Jesus.png';
import DiegoFernando from '../../Assets/Images/DiegoFernando.png';
import Maessarath from '../../Assets/Images/MaessarathIchola.png';


const Formados_Araras = () => {
    return(
        <div id="formados_araras" className="content">
            <div className="content__wrapper">
                {/* 1 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Andrés Manuel de Jesus Leguizamón Coronel</h2>
                        <h4>Curso: Engenharia de Agronomia - Concluído em 2018</h4>
                        <h4>País: Paraguai</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Jesus} alt="Andrés Jesus"/>
                        </div>
                        <div className="perfil--text">
                            <p>
                                "Participei do GETAP, GeAgro, Gepem, GETI (Grupo de Estudos de Technologia e de Irrigação).
                                Atuo hoje na maior produtora de açúcar orgânico do Paraguai, ocupando o cargo de encarregado de Experimentação e Desenvolvimento.
                                A UFSCar, por meio da minha experiencia na PMGCA, me ajudou bastante."
                            </p>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Diego Fernando Atoche Garay</h2>
                        <h4>Curso: Biotecnologia - Concluído em 2017</h4>
                        <h4>País: Péru</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={DiegoFernando} alt="Diego Fernando"/>
                        </div>
                        <div className="perfil--text">
                            Nam odio augue, malesuada non felis sed, sagittis pharetra nisi. Nam non felis malesuada, porta metus ac, tempor augue. Cras venenatis diam vestibulum fermentum ultricies. Phasellus lectus nunc, suscipit tempor sagittis in, ullamcorper sed lacus. Vestibulum dapibus sapien eget mauris varius, ac accumsan nisi scelerisque. Donec mollis risus sed commodo commodo. Ut in felis eros. Donec sem quam, commodo et nibh eu, suscipit tincidunt eros. Vivamus congue sodales mauris in lacinia. Etiam sit amet nisl ante. Sed massa massa, bibendum sit amet nunc vitae, ultricies laoreet ipsum.
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Maéssarath Alakè Adéchina</h2>
                        <h4>Curso: Biotecnologia - Concluído em 2018</h4>
                        <h4>País: Benin</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Maessarath} alt="Alaké"/>
                        </div>
                        <div className="perfil--text">
                            Nam odio augue, malesuada non felis sed, sagittis pharetra nisi. Nam non felis malesuada, porta metus ac, tempor augue. Cras venenatis diam vestibulum fermentum ultricies. Phasellus lectus nunc, suscipit tempor sagittis in, ullamcorper sed lacus. Vestibulum dapibus sapien eget mauris varius, ac accumsan nisi scelerisque. Donec mollis risus sed commodo commodo. Ut in felis eros. Donec sem quam, commodo et nibh eu, suscipit tincidunt eros. Vivamus congue sodales mauris in lacinia. Etiam sit amet nisl ante. Sed massa massa, bibendum sit amet nunc vitae, ultricies laoreet ipsum.
                        </div>
                    </div>
                </div>
                {/* */}
            </div>
        </div>
    );
}
export default Formados_Araras;