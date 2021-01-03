import React from 'react';
import './formados-sc.css';
import LidiaCorina from '../../Assets/Images/LidiaCorina.png';
import Alex from '../../Assets/Images/AlexCaboVerde.png';
import Suy from '../../Assets/Images/suyAlmeida.png';
import Bebe from '../../Assets/Images/Bebe.png';
import Diego from '../../Assets/Images/Diego.png';
import Santos from '../../Assets/Images/Santos.png';
import Osires from '../../Assets/Images/Osires.png';


const Formados_SaoCarlos = () => {
    return(
        <div id="formados_saocarlos" className="content">
            <div className="content__wrapper">
                {/* 1 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Lidia Corina Quispe Rueda</h2>
                        <h4>Curso: Enfermagem - Concluído em 1986</h4>
                        <h4>País: Venezuela</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={LidiaCorina} alt="Lidia-Corina"/>
                        </div>
                        <div className="perfil--text">
                            <p>
                                "Minha vida de estudante foi bastante alegre. 
                                Vivi momentos muito felizes na universidade, 
                                foi fácil me adaptar com meus colegas de curso. 
                                Mas também teve alguns momentos tristes por estar 
                                longe de casa."
                            </p>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Alex Yannick Azevedo da Graça</h2>
                        <h4>Curso: Engenharia da Produção - Concluído em 2015</h4>
                        <h4>País: Cabo verde</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Alex} alt="Alex"/>
                        </div>
                        <div className="perfil--text">
                            <p>
                                "Durante a minha graduação participei de diversas coisas
                               e minha experiência foi rica, mas muito rica mesmo. Participei
                               do time de atletas de basquete da universidade, participei da
                               AAA, morei em república com brasileiros e cabo-verdianos e 
                               sempre me senti muito integrado na comunidade universitária 
                               e na minha turma e no meu curso. Sempre tive excelente relacionamento 
                               com colegas e professores do departamento de Engenharia de 
                               Produção e não só. Morei durante 8 anos em São Carlos, e se 
                               pudesse escolher, faria tudo de novo. Se tem uma foto que 
                               resume bem toda a minha jornada é essa durante a minha formatura
                               com a minha mãe.
                            </p>
                            <p>
                                Atualmente estou atuando como coordenador de produção numa 
                               indústria de tintas e vernizes, chamada SITA SA, aqui na cidade 
                               da Praia em Cabo Verde. Estou completamente dentro da minha área 
                               de formação atuando diretamente no chão de fábrica, no planejamento 
                               e controle da produção e também na parte de gestão e controle de estoque. 
                               Na empresa, também sou responsável pela parte de Higiene e Segurança 
                               do Trabalho."
                            </p>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Suysia Ramos d´Almeida</h2>
                        <h4>Curso: Engenharia Química - Concluído em 2016</h4>
                        <h4>País: São Tomé e Príncipe</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Suy} alt="Suy_Almeida"/>
                        </div>
                        <div className="perfil--text">
                            <p>
                                "Foram vários problemas e desafios pessoais enfrentados por mim desde chagada e 
                                durante todo o tempo de estada no Brasil, até a conclusão da minha graduação que 
                                englobam saudade da família, questões financeiras, nova cultura e costumes e principalmente 
                                questões metodológicas, relação professor/aluno/colega do curso. A UFSCar me deu oportunidade 
                                de conhecer pessoas que levarei para minha vida toda, aprendi sobre diversas cultuas incluindo 
                                a dos meu irmão africanos, aprendi ão ter vergonha de me expressar, aprendi a ter um propósito 
                                nas coisas que faço. Uma coisa que me marcou durante o período da vida universitária foi a troca de experiências, 
                                principalmente com a vinda de novos estudantes PEC-G. Lembro que muitos de nós sentíamos muita saudade da nossa família. 
                                Estar fora de casa e ter que nos deparar com as dificuldades do cotidiano não é fácil.<br/>
                                A UFSCar teve um papel muito importante na minha vida profissional, uma vez que ela foi à base 
                                da minha vida universitária. A experiência vivida na UFSCar foi muito favorável ao meu aprendizado e da minha 
                                expansão da maior visão de mundo, me influenciando na maneira que planejo a minha carreira Professional atualmente. 
                                Atualmente faço doutorado em Química na USP – São Carlos."
                            </p>
                        </div>
                    </div>
                </div>
                {/* 4 Inverter com 5*/}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Bebe Abida Cá</h2>
                        <h4>Curso: Enfermagem - Concluído em 2018</h4>
                        <h4>País: Guiné Bissau</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Bebe} alt="Bebe"/>
                        </div>
                        <div className="perfil--text">
                            Nam odio augue, malesuada non felis sed, sagittis pharetra nisi. Nam non felis malesuada, porta metus ac, tempor augue. Cras venenatis diam vestibulum fermentum ultricies. Phasellus lectus nunc, suscipit tempor sagittis in, ullamcorper sed lacus. Vestibulum dapibus sapien eget mauris varius, ac accumsan nisi scelerisque. Donec mollis risus sed commodo commodo. Ut in felis eros. Donec sem quam, commodo et nibh eu, suscipit tincidunt eros. Vivamus congue sodales mauris in lacinia. Etiam sit amet nisl ante. Sed massa massa, bibendum sit amet nunc vitae, ultricies laoreet ipsum.
                        </div>
                    </div>
                </div>
                {/* 5 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Diego Flórez Alban</h2>
                        <h4>Curso: Bacharel em Física - Concluído em 2017</h4>
                        <h4>País: Venezuela</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Diego} alt="Diego"/>
                        </div>
                        <div className="perfil--text">
                            <p>
                                "Minha experiência foi maravilhosa. Eu venho de um país que está passando por um período histórico complicado, 
                                onde a situação social e econômica dificulta enormemente a realização apropriada de estudos universitários. 
                                O Brasil, através do PEC-G, me acolheu de braços abertos, me tratou como um filho seu, e me proporcionou uma 
                                educação de altíssima qualidade. 
                                Minha graduação em São Carlos foi um período de grande crescimento pessoal e profissional. Porém não foi sem 
                                dificuldades, a maior delas foi começo. 
                                Quando cheguei me encontrei com um "novo mundo": nova lingua, novo sistema, novas pessoas e novos professores. 
                                O conjunto representa um grande desafio.
                            </p>
                            <p>
                                Felizmente, eu tive muita ajuda, fui muito bem acolhido pelos meus colegas brasileiros, e os professores e os tutores foram receptivos e compreensíveis 
                                com minhas dificuldades. Além disso, as diferenças culturais com o Brasil, mesmo que presentes, não são tantas ou tão acentuadas, o que facilitou minha integração. 
                                Com o tempo, eu fiquei cada vez mais à vontade. As matérias viraram mais compreensíveis, e meus vínculos de amizade com meus colegas se fortaleceram.<br/>
                                Durante meu último semestre, pude prestar em São Paulo uma prova de ingresso para várias "Grandes Écoles" francesas, e fui aceito na "Escola Superior de Física e 
                                Química Industrial da cidade de Paris (ESPCI)". Escola onde estudaram ou trabalharam grandes cientistas como Pierre e Marie Curie, e Paul Langevin. Devo meu sucesso 
                                nesta prova à formação que o Brasil me ofereceu."
                            </p>
                        </div>
                    </div>
                </div>
                {/* 6 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Ayolsé Andrade Pires dos Santos</h2>
                        <h4>Curso: Ciência Sociais - Concluído em 2019</h4>
                        <h4>País: São Tomé e Príncipe</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Santos} alt="Lidia-Corina"/>
                        </div>
                        <div className="perfil--text">
                            <p>
                                "Aos 20 anos deixei o meu país e vim ao Brasil cursar Ciências Socias 
                                por intermédio do programa PEC-G. Embarcar nessa aventura só trouxe 
                                coisas boas na minha vida, além de conhecer pessoas de outros pais e 
                                trocar conhecimento, valeu a pena o aprendizado de vivencia em país 
                                estrangeiro. Apreender a lidar com a diversidade e diferença são as 
                                coisas que mais marcaram essa trajetória. O PEC-G tem proporcionado a 
                                oportunidade de alargar o horizonte de conhecimento, tem permitido novas 
                                perspectivas e novos anseios. O mundo acadêmico tem despertado nova forma 
                                de compreender o mundo, criar novos hábitos e costumes e, além de tudo tem 
                                abrido novas portas."
                            </p>
                        </div>
                    </div>
                </div>
                {/* 7 */}
                <div className="perfil">
                    <div className="perfil__primary">
                        <h2>Osires Fernando Ribeiro Nhaga</h2>
                        <h4>Curso: Engenharia de Computação - Concluido em 2019</h4>
                        <h4>País: Guiné Bissau</h4>
                    </div>
                    <div className="perfil__secondary">
                        <div className="perfil--img">
                            <img src={Osires} alt="Osires"/>
                        </div>
                        <div className="perfil--text">
                            <p>
                                "Foi um privelegio estudar em uma das melhores universidades do Brasil, estou muito grato por isso, 
                                durante o periodo da minha graduação na UFSCar tive oportunidade de conhecer 
                                muitas pessoas que vão permanecer para sempre na minha vida.
                            </p>
                            <p>
                                Aprendi muito com os meus professores, e em especial do Departamento da Computação, que a meu ver são 
                                proficionais capacitados e que valorizam os alunos em muitos aspectos, esclarecendo as dúvidas dentro e 
                                foras das salas de aula, sou muito grato por ter alguns colegas/amigos que sempre nos colaboravamos, estudar 
                                juntos ou individual e depois tirando dúvida um do outro. Tive dificuldades em algumas matérias durante o curso, 
                                e os metodos que eu adotava sempre pra tentar supera-lo são vários, 
                                levando em consideração meu grau da dificuldade no assunto.<br/>
                                E a entidade da UFSCar que é responsável por acompanhamento de estudantes PEC-Gs, a Coordenadoria de Ações Afirmativas e 
                                Outras Políticas de Equidade (CAAPE), as/os responsáveis dessa entidade fizeram toda diferença na minha caminhada pela UFSCar, 
                                na forma como realizam acompanhamento, como auxiliam na resolução de alguns problemas do aluno, esclarecimento de algumas normas, 
                                elaborção de alguns projetos/estrategias que podem ajudar a melhorar o desempenho acadêmico de um estudante PEC-G, entre outras ações, 
                                é de agradecer, e espero que continuem melhorando nisso e na vossa caminhada proficional. "
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Formados_SaoCarlos;