import React from 'react';
import '../Formados-sc/formados-sc.css';

import Vanessa from '../../Assets/Images/VanessaNtika.png';
import Erlete from '../../Assets/Images/Erlete.png';
import Edina from '../../Assets/Images/EdinaCoia.png';


const Formados_Sorocaba = () => {
    return(
        <div id="formados_sorocaba" className="content">
            <div className="content__wrapper">
                {/* 1 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Vanessa Ntika Aziza</h2>
                        <h4>Curso: Ciências Econômicas - Concluído em 2015</h4>
                        <h4>País: República Democrática do Congo</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Vanessa} alt="Vanessa"/>
                        </div>
                        <div className="perfil--text">
                            Nam odio augue, malesuada non felis sed, sagittis pharetra nisi. Nam non felis malesuada, porta metus ac, tempor augue. Cras venenatis diam vestibulum fermentum ultricies. Phasellus lectus nunc, suscipit tempor sagittis in, ullamcorper sed lacus. Vestibulum dapibus sapien eget mauris varius, ac accumsan nisi scelerisque. Donec mollis risus sed commodo commodo. Ut in felis eros. Donec sem quam, commodo et nibh eu, suscipit tincidunt eros. Vivamus congue sodales mauris in lacinia. Etiam sit amet nisl ante. Sed massa massa, bibendum sit amet nunc vitae, ultricies laoreet ipsum.
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Erlete Ceita Pires dos Santos</h2>
                        <h4>Curso: Administração - Concluído em 2016</h4>
                        <h4>País: São Tomé e Princípe</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Erlete} alt="Erlete"/>
                        </div>
                        <div className="perfil--text">
                            Nam odio augue, malesuada non felis sed, sagittis pharetra nisi. Nam non felis malesuada, porta metus ac, tempor augue. Cras venenatis diam vestibulum fermentum ultricies. Phasellus lectus nunc, suscipit tempor sagittis in, ullamcorper sed lacus. Vestibulum dapibus sapien eget mauris varius, ac accumsan nisi scelerisque. Donec mollis risus sed commodo commodo. Ut in felis eros. Donec sem quam, commodo et nibh eu, suscipit tincidunt eros. Vivamus congue sodales mauris in lacinia. Etiam sit amet nisl ante. Sed massa massa, bibendum sit amet nunc vitae, ultricies laoreet ipsum.
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Edina Coia de Oliveira</h2>
                        <h4>Curso: </h4>
                        <h4>País: Guiné-Bissau</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Edina} alt="Edina"/>
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