
// LOGICA DO BANCO
    // pega os top 6 cursos cadastratos no banco
        // EM BREVE


    // pega a quantidade de alunos na turma de cada um dos 6 cursos 
        // EM BREVE
        // (acredito que vai ser um for dentro de outro)

    // pega o total de alunos cadastrados em todos os 6 cursos
        // EM BREVE

       

window.onload = function() { 
		
    animateprogress("#html5",85);
    animateprogress("#php",72);
    animateprogress("#css",86);
    animateprogress("#python",52);
    animateprogress("#javascript",79);
    animateprogress("#nodejs",36);
    
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