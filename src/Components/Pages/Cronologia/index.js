import React from 'react';
import './Cronologia.css';

const Cronologia = () => {
    return(
        <div className="crono" id="crono">
            <div className="crono__content">
                <div className="crono__content-title">
                    <h2>Cronologia</h2>
                </div>
                <div className="crono__content-primary">
                    A UFSCar é signatária do PEC-G desde a década de 1970. Entre 1999 e 2001 o acordo foi interrompido e retomado em 2002. 
                    Os cursos ofertados ao PEC-G seguem as indicações e demandas dos países participantes do convênio.
                    Recebemos estudantes nos campi São Carlos, Araras e Sorocaba. Até 2020, no campus Lagoa do Sino não havia estudante PEC-G. 
                    Nestes 50 anos de história da UFSCar, a presença do PEC-G ocupa espaço fundamental, sendo um dos programas internacionais 
                    mais antigos da instituição, contribuindo com a formação de quadros profissionais de diversos países do mundo e ampliando 
                    nossos olhares para a diversidade cultural.<br/><br/>
                    Os estudantes PEC-G são oriundos de países do Continente Africano, 
                    Américas do Sul e Central. Ao longo desses anos, a UFSCar recebeu estudantes dos seguintes países: Angola, Benin, Cabo Verde, 
                    Costa do Marfim, Gabão, Gana, Guiné-Bissau, Guiné Equatorial, Moçambique, Namíbia, Nigéria, República Democrática do Congo 
                    e São Tomé e Príncipe (Continente Africano); Bolívia, Chile, Colômbia, Costa Rica, El Salvador, Equador, Haiti, Honduras, 
                    Jamaica, Nicarágua, Panamá, Paraguai, Peru, República Dominicana, Suriname, Uruguai e Venezuela (América Latina e Caribe).
                </div>
                <div className="crono__content-secondary">
                    Ao longo desses anos, muitas foram as dificuldades e conquistas dos estudantes PEC-G na UFSCar. 
                    Uma das conquistas ocorreu em 2009, quando passaram a ser acompanhados acadêmica e pedagogicamente 
                    pela Equipe Técnica do Programa de Ações Afirmativas e, posteriormente, em 2012, pela Coordenadoria 
                    de Ações Afirmativas e Outras Políticas de Equidade (CAAPE).
                    Em 2015, esse setor passou a se chamar Coordenadoria de Acompanhamento Acadêmico e Pedagógico para 
                    Estudantes (CAAPE). Nos demais campi, esse acompanhamento é realizado pelos Departamentos de Ensino 
                    de Graduação – DeEGs. O acompanhamento acadêmico e pedagógico aos estudantes PEC-G fortaleceu o grupo 
                    de estudantes que passaram a contar com este apoio para sua permanência na instituição, do ponto de vista 
                    acadêmico.
                </div>
            </div>
        </div>
    )
}

export default Cronologia;