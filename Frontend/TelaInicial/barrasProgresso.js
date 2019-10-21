var porcentagem1 = 85   


// LOGICA DO BANCO
    // pega os top 6 cursos cadastratos no banco
        // EM BREVE

    // pega a quantidade de alunos na turma de cada um dos 6 cursos 
        // EM BREVE
        // (acredito que vai ser um for dentro de outro)

    // pega o total de alunos cadastrados em todos os 6 cursos
        // EM BREVE

        var total = 400 //?

    let porcentagem = total / 100;













window.onload = function() { 
		
    animateprogress("#html5",this.porcentagem1);
    animateprogress("#php",72);
    animateprogress("#css",86);
    animateprogress("#python",52);
    animateprogress("#javascript",79);
    animateprogress("#nodejs",36);
    
} 	

function animateprogress (id, val){    
 
 
    var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la máxima compatibilidad con todos los navegadores */
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||  
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( callback ){
            window.setTimeout(enroute, 1 / 60 * 1000);
        };
         
    };
     
    var fpAnimationFrame = getRequestAnimationFrame();   /* <--- Declaro una instancia de getRequestAnimationFrame para llamar a la función animación */
    var i = 0;
    var animacion = function () {
             
    if (i<=val)
        {
            document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
            document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
            i++;
            fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
        }
                                         
    }
 
        fpAnimationFrame(animacion);   /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
                 
}