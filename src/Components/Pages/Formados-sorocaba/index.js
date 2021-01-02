import React from 'react';
import './formados-sorocaba.css';

import DiegoFernando from '../../Assets/Images/DiegoFernando.png';


const Formados_Sorocaba = () => {
    return(
        <div id="formados_sorocaba" className="content">
            <div className="content__wrapper">
                {/* 1 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Jésus</h2>
                        <h4>Curso: </h4>
                        <h4>País: Perú</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={DiegoFernando} alt="J"/>
                        </div>
                        <div className="perfil--text">
                            Nam odio augue, malesuada non felis sed, sagittis pharetra nisi. Nam non felis malesuada, porta metus ac, tempor augue. Cras venenatis diam vestibulum fermentum ultricies. Phasellus lectus nunc, suscipit tempor sagittis in, ullamcorper sed lacus. Vestibulum dapibus sapien eget mauris varius, ac accumsan nisi scelerisque. Donec mollis risus sed commodo commodo. Ut in felis eros. Donec sem quam, commodo et nibh eu, suscipit tincidunt eros. Vivamus congue sodales mauris in lacinia. Etiam sit amet nisl ante. Sed massa massa, bibendum sit amet nunc vitae, ultricies laoreet ipsum.
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Diego Fernando</h2>
                        <h4>Curso: </h4>
                        <h4>País: </h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={DiegoFernando} alt="D"/>
                        </div>
                        <div className="perfil--text">
                            Nam odio augue, malesuada non felis sed, sagittis pharetra nisi. Nam non felis malesuada, porta metus ac, tempor augue. Cras venenatis diam vestibulum fermentum ultricies. Phasellus lectus nunc, suscipit tempor sagittis in, ullamcorper sed lacus. Vestibulum dapibus sapien eget mauris varius, ac accumsan nisi scelerisque. Donec mollis risus sed commodo commodo. Ut in felis eros. Donec sem quam, commodo et nibh eu, suscipit tincidunt eros. Vivamus congue sodales mauris in lacinia. Etiam sit amet nisl ante. Sed massa massa, bibendum sit amet nunc vitae, ultricies laoreet ipsum.
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Diego</h2>
                        <h4>Curso: </h4>
                        <h4>País: </h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={DiegoFernando} alt="D"/>
                        </div>
                        <div className="perfil--text">
                            Nam odio augue, malesuada non felis sed, sagittis pharetra nisi. Nam non felis malesuada, porta metus ac, tempor augue. Cras venenatis diam vestibulum fermentum ultricies. Phasellus lectus nunc, suscipit tempor sagittis in, ullamcorper sed lacus. Vestibulum dapibus sapien eget mauris varius, ac accumsan nisi scelerisque. Donec mollis risus sed commodo commodo. Ut in felis eros. Donec sem quam, commodo et nibh eu, suscipit tincidunt eros. Vivamus congue sodales mauris in lacinia. Etiam sit amet nisl ante. Sed massa massa, bibendum sit amet nunc vitae, ultricies laoreet ipsum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Formados_Sorocaba;