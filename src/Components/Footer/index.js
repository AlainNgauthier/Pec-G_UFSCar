import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer" >
            <div className="footer__content-primary">
                <div className="logo">
                    logo UFSCar
                </div>
                <div className="logo">
                    logo PEC-G
                </div>
            </div>
            <div className="footer__content-secondary">
                <span>PEC-G</span>
                <span>&copy;2020, Todos os direitos reservados</span>
            </div>
        </div>
    )
}
export default Footer;