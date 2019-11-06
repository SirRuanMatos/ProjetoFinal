import React, { Component } from 'react';
import '../css/barrasEstilo.css'

class TelaPopularidade extends Component {

    componentWillMount() {
        // LOGICA DO BANCO
        // pega os top 6 cursos cadastratos no banco
        // EM BREVE
        var nomedoscursos = []

        // pega a quantidade de alunos na turma de cada um dos 6 cursos 
        // EM BREVE
        var alunocursos = [];
        var porcentagem = [];

        // for (i=o; i<nomedoscursos.length; i++) {
        //     alunocursos.push()    
        // }
        // codigo acima que imagino que vai precisar para adicionar do banco!

        alunocursos.push(100, 120, 75, 45, 126, 41);  // números ficticios, falta pegar numeros reais do banco

        // pega o total de alunos cadastrados em todos os 6 cursos
        var totalalunos = 0
        for (var i = 0; i < alunocursos.length; i++) {
            totalalunos += alunocursos[i]
            console.log(totalalunos);
        }

        // calcula a porcentagem dos cursos
        for (var i = 0; i < alunocursos.length; i++) {
            porcentagem.push((alunocursos[i] * 100) / totalalunos)
            console.log(porcentagem[i]);
        }






        // aqui é codigo do lucas

        window.onload = setTimeout(function(){
                //deferred onload
                animateprogress("#html5", 85);
                animateprogress("#php", 72);
                animateprogress("#css", 86);
                animateprogress("#python", 52);
                animateprogress("#javascript", 79);
                animateprogress("#nodejs", 36);
              }, 100);


        function animateprogress(id, val) {


            var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame tentando obter a máxima compatibilidade com todos os navegadores */
                return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(1 / 60 * 1000);
                    };

            };

            var fpAnimationFrame = getRequestAnimationFrame();   /* <--- Declaro uma instância de getRequestAnimationFrame para chamar a função de animação */
            var i = 0;
            var animacion = function () {

                if (i <= val) {
                    document.querySelector(id).setAttribute("value", i);      /* <----  Aumenta o valor da barra de progresso */
                    //document.querySelector(id + "+ span").innerHTML = i + "%";     /* <---- Aumenta a porcentagem e mostro na tag span */
                    i++;
                    fpAnimationFrame(animacion);      /* <----- Enquanto o contador não atinge a porcentagem definida, a função é chamada novamente com fpAnimationFrame   */
                }

            }

            fpAnimationFrame(animacion);   /*  <---- Chama a animação pela primeira vez usando fpAnimationFrame para que se execute a 60fps  */

        }

    }


    render() {
        return (
            <div className='conteudo'>

                <div className='body_TelaPopularidade'>
                    <div className="wrapper">
                        <div className="fadeInUp formContent container">
                            <div className="fadeIn first">
                                <h1 className="titulo">Popularidade</h1>
                            </div>

                            <div className="container">
                                <div>
                                    <p>HTML5</p>
                                    <progress id="html5" max="100" value="91"></progress>
                                    <span></span>
                                </div>

                                <div>
                                    <p>PHP</p>
                                    <progress id="php" max="100" value="72"></progress>
                                    <span></span>
                                </div>
                                <div>
                                    <p>CSS</p>
                                    <progress id="css" max="100" value="86"></progress>
                                    <span></span>
                                </div>

                                <div>
                                    <p>Python</p>
                                    <progress id="python" max="100" value="52"></progress>
                                    <span></span>
                                </div>
                                <div>
                                    <p>Javascript</p>
                                    <progress id="javascript" max="100" value="79"></progress>
                                    <span></span>
                                </div>

                                <div>
                                    <p>Node.js</p>
                                    <progress id="nodejs" max="100" value="36"></progress>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}



export default TelaPopularidade;

