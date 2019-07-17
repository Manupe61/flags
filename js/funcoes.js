   
    var visivel = false;

    function mostrar(){
    var objDiv = document.getElementById('oculto');     
       if (visivel == false){
          objDiv.style.display = "block"; 
          visivel = true;             
       }else{
          objDiv.style.display = "none";
          visivel = false;         
    }
    }
    
/*
função para verificar se a resposta é a correta
*/

function limpar() {
  document.getElementById("respostaDoPais").innerHTML = "";
  document.getElementById("respostaDaCapital").innerHTML = "";
  }

function respostaPais(){
  if (rpais == false){
  var x = document.getElementById("certopais").checked;
      if (x == true) {
        respostaDoPais = "Resposta Correta!";
        pontos = pontos + 1;        
      } else {
        respostaDoPais = "Resposta Errada!"; 
        pontos = pontos - 1;          
      }

/*
seção para publicar se a resposta é correta ou não!
*/

  document.getElementById("respostaDoPais").innerHTML = respostaDoPais;

/*
seção para publicar a quantidade de pontos
*/

  document.getElementById("pontos").innerHTML = pontos;

/*
controle para evitar repetir a resposta na mesma rodada
*/
  rpais = true;

    }
}

function respostaCapital(){
  if (rcapital == false){
  var y = document.getElementById("certocapital").checked;
      if (y == true) {
        respostaDaCapital = "Resposta Correta!";
        pontos = pontos + 2;
      } else {
        respostaDaCapital = "Resposta Errada!";
        pontos = pontos - 1; 
      } 

/*
seção para publicar se a resposta é correta ou não!
*/
  document.getElementById("respostaDaCapital").innerHTML = respostaDaCapital;

/*
seção para publicar a quantidade de pontos
*/

document.getElementById("pontos").innerHTML = pontos;

/*
controle para evitar repetir a resposta na mesma rodada
*/

rcapital = true;

    }
}