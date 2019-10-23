
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
        for (i=0; i < alunocursos.length; i++) {
            totalalunos += alunocursos[i]
            console.log(totalalunos);
        }

    // calcula a porcentagem dos cursos
        for (i=0; i < alunocursos.length; i++) { 
            porcentagem.push((alunocursos[i] * 100) / totalalunos)
            console.log(porcentagem[i]);
        }



window.onload = function() { 
		
    animateprogress("#html5",this.porcentagem[1]);
    animateprogress("#php",this.porcentagem[2]);
    animateprogress("#css",this.porcentagem[3]);
    animateprogress("#python",this.porcentagem[4]);
    animateprogress("#javascript",this.porcentagem[5]);
    animateprogress("#nodejs",this.porcentagem[6]);
    
} 	


function animateprogress (id, val){    
 
 
    var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame tentando obter a máxima compatibilidade com todos os navegadores */
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||  
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( callback ){
            window.setTimeout(enroute, 1 / 60 * 1000);
        };
         
    };
     
    var fpAnimationFrame = getRequestAnimationFrame();   /* <--- Declaro uma instância de getRequestAnimationFrame para chamar a função de animação */
    var i = 0;
    var animacion = function () {
             
    if (i<=val)
        {
            document.querySelector(id).setAttribute("value",i);      /* <----  Aumenta o valor da barra de progresso */
            document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Aumenta a porcentagem e mostro na tag span */
            i++;
            fpAnimationFrame(animacion);      /* <----- Enquanto o contador não atinge a porcentagem definida, a função é chamada novamente com fpAnimationFrame   */
        }
                                         
    }
 
        fpAnimationFrame(animacion);   /*  <---- Chama a animação pela primeira vez usando fpAnimationFrame para que se execute a 60fps  */
                 
}