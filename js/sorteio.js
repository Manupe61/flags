/*
Função para escolha aleatória da bandeira
*/

function sorteio(){

rpais = false;
rcapital = false;
rodada = rodada - 1;

var sorte = Math.floor(( Math.random() * 60 ) +1);
  switch (sorte) {

      case sorte=1:
        var pais = 'Afeganistão';
        var capital = 'Kabul'
        var url = 'img/Afghanistan.png';
      break;

      case sorte=2:
        var pais = 'Albania';
        var capital = 'Tirana'
        var url = 'img/Albania.png';
      break;

      case sorte=3:
        var pais = 'Argélia';
        var capital = 'Argel'
        var url = 'img/Algeria.png';
      break;

      case sorte=4:
        var pais = 'Samoa Americana';
        var capital = 'Pago Pago'
        var url = 'img/American_Samoa.png';
      break;

      case sorte=5:
        var pais = 'Cambodia';
        var capital = 'Phnom Penh'
        var url = 'img/Cambodia.png';
      break;

      case sorte=6:
        var pais = 'Angola';
        var capital = 'Luanda'
        var url = 'img/Angola.png';
      break;

      case sorte=7:	
        var pais = 'Anguilla';
        var capital = 'Vale'
        var url = 'img/Anguilla.png';
      break;	

      case sorte=8:		
        var pais = 'Antigua e Barbuda';
        var capital = 'Saint John'
        var url = 'img/Antigua_and_Barbuda.png';
      break;

      case sorte=9:		
        var pais = 'Argentina';
        var capital = 'Buenos Aires'
        var url = 'img/Argentina.png';
      break;

      case sorte=10:		
        var pais = 'Armenia';
        var capital = 'Yerevan'
        var url = 'img/Armenia.png';
      break;

      case sorte=11:		
        var pais = 'Aruba';
        var capital = 'Oranjestade'
        var url = 'img/Aruba.png';
      break;		
          
      case sorte=12:		
        var pais = 'Austrália';
        var capital = 'Camberra'
        var url = 'img/Australia.png';
      break;		
        
      case sorte=13:		
        var pais = 'Áustria';
        var capital = 'Viena'
        var url = 'img/Austria.png';
      break;	

      case sorte=14:		
        var pais = 'Azerbaijão';
        var capital = 'Baku'
        var url = 'img/Azerbaijan.png';
      break;	

      case sorte=15:		
      var pais = 'Bahamas';
      var capital = 'Nassau'
      var url = 'img/Bahamas.png';
      break;

      case sorte=16:		
      var pais = 'Bahrain';
      var capital = 'Manamal'
      var url = 'img/Bahrain.png';
      break;	

      case sorte=17:		
      var pais = 'Bangladesh';
      var capital = 'Dacal'
      var url = 'img/Bangladesh.png';
      break;	

      case sorte=18:		
      var pais = 'Barbados';
      var capital = 'Bridgetown'
      var url = 'img/Barbados.png';
      break;	

      case sorte=19:		
      var pais = 'Bielorrússia';
      var capital = 'Minsk'
      var url = 'img/Belarus.png';
      break;	

      case sorte=20:		
      var pais = 'Bélgica';
      var capital = 'Bruxelas'
      var url = 'img/Belgium.png';
      break;	

      case sorte=21:		
      var pais = 'Belize';
      var capital = 'Belmopã'
      var url = 'img/Belize.png';
      break;	

      case sorte=22:		
      var pais = 'Benin';
      var capital = 'Porto novol'
      var url = 'img/Benin.png';
      break;	

      case sorte=23:		
      var pais = 'Bermuda';
      var capital = 'Hamilton'
      var url = 'img/Bermuda.png';
      break;	

      case sorte=24:		
      var pais = 'Butão';
      var capital = 'Timbu'
      var url = 'img/Bhutan.png';
      break;	

      case sorte=25:		
      var pais = 'Bolívia';
      var capital = 'Sucre'
      var url = 'img/Bolivia.png';
      break;	

      case sorte=26:		
      var pais = 'Bosnia';
      var capital = 'Saravejo'
      var url = 'img/Bosnia.png';
      break;	

      case sorte=27:		
      var pais = 'Botswana';
      var capital = 'Gaborone'
      var url = 'img/Botswana.png';
      break;	

      case sorte=28:		
      var pais = 'Brasil';
      var capital = 'Brasilia'
      var url = 'img/Brazil.png';
      break;	

      case sorte=29:		
      var pais = 'Ilhas Virgens Britânicas';
      var capital = 'Road Town'
      var url = 'img/British_Virgin_Islands.png';
      break;	

      case sorte=30:		
      var pais = 'Brunei';
      var capital = 'Bandar Seri Begawan'
      var url = 'img/Brunei.png';
      break;	

      case sorte=31:		
      var pais = 'Bulgária';
      var capital = 'Sófia'
      var url = 'img/Bulgaria.png';
      break;	

      case sorte=32:		
      var pais = 'Burkina Faso';
      var capital = 'Uagadugu'
      var url = 'img/Burkina_Faso.png';
      break;	

      case sorte=33:		
      var pais = 'Burundi';
      var capital = 'Gitega'
      var url = 'img/Burundi.png';
      break;	

      case sorte=34:		
      var pais = 'Cambodja';
      var capital = 'Phnom Penh'
      var url = 'img/Cambodia.png';
      break;	

      case sorte=35:		
      var pais = 'Camarões';
      var capital = 'Yaoundé'
      var url = 'img/Cameroon.png';
      break;	

      case sorte=36:		
      var pais = 'Canadá';
      var capital = 'Ottawa'
      var url = 'img/Canada.png';
      break;	

      case sorte=37:		
      var pais = 'Cabo Verde';
      var capital = 'Praia'
      var url = 'img/Cape_Verde.png';
      break;	

      case sorte=38:		
      var pais = 'Ilhas Caimã';
      var capital = 'George Town'
      var url = 'img/Cayman_Islands.png';
      break;	

      case sorte=39:		
      var pais = 'República Central Africana';
      var capital = 'Bangui'
      var url = 'img/Central_African_Republic.png';
      break;	

      case sorte=40:		
      var pais = 'Chad';
      var capital = 'Djamena'
      var url = 'img/Chad.png';
      break;	

      case sorte=41:		
      var pais = 'Chile';
      var capital = 'Santiago'
      var url = 'img/Chile.png';
      break;	

      case sorte=42:		
      var pais = 'China';
      var capital = 'Pequim'
      var url = 'img/China.png';
      break;	

      case sorte=43:		
      var pais = 'Colombia';
      var capital = 'Bogotá'
      var url = 'img/Colombia.png';
      break;	

      case sorte=44:		
      var pais = 'Costa Rica';
      var capital = 'San José'
      var url = 'img/Costa_Rica.png';
      break;	

      case sorte=45:		
      var pais = 'Costa do Merfim';
      var capital = 'Yamussucro'
      var url = 'img/Côte_dIvoire.png';
      break;	

      case sorte=46:		
      var pais = 'Croácia';
      var capital = 'Zagrebe'
      var url = 'img/Croatia.png';
      break;	

      case sorte=47:		
      var pais = 'Cuba';
      var capital = 'Havana'
      var url = 'img/Cuba.png';
      break;	

      case sorte=48:		
      var pais = 'Chipre';
      var capital = 'Nicósia'
      var url = 'img/Cyprus.png';
      break;	

      case sorte=49:		
      var pais = 'Republica Tcheca';
      var capital = 'Praga'
      var url = 'img/Czech_Republic.png';
      break;	

      case sorte=50:		
      var pais = 'Congo';
      var capital = 'Brazzaville'
      var url = 'img/Congo.png';
      break; 

      case sorte=51:		
      var pais = 'Dinamarca';
      var capital = 'Copenhage'
      var url = 'img/Dinamarca.png';
      break; 

      case sorte=52:		
      var pais = 'Djibouti';
      var capital = 'Djibuti'
      var url = 'img/Djibouti.png';
      break; 

      case sorte=53:		
      var pais = 'Dominica';
      var capital = 'Roseau'
      var url = 'img/Dominica.png';
      break; 

      case sorte=54:		
      var pais = 'Egito';
      var capital = 'Cairo'
      var url = 'img/Egito.png';
      break; 

      case sorte=55:		
      var pais = 'El_Salvador';
      var capital = 'São Salvador'
      var url = 'img/El_Salvador.png';
      break; 

      case sorte=56:		
      var pais = 'Equador';
      var capital = 'Quito'
      var url = 'img/Equador.png';
      break; 

      case sorte=57:		
      var pais = 'Eritrea';
      var capital = 'Asmara'
      var url = 'img/Eritrea.png';
      break; 

      case sorte=58:		
      var pais = 'Estonia';
      var capital = 'Talín'
      var url = 'img/Estonia.png';
      break; 

      case sorte=59:		
      var pais = 'Etiopia';
      var capital = 'Addis Ababa'
      var url = 'img/Etiopia.png';
      break; 

      case sorte=60:		
      var pais = 'Fiji';
      var capital = 'Suva'
      var url = 'img/Fiji.png';
      break;
  }

/*
seção para publicar os valores sorteados
*/

document.getElementById("flag").src = url;
document.getElementById("pais").innerHTML = pais;    
document.getElementById("capital").innerHTML = capital;

/*
seção para sortear outras opções para as perguntas
*/

var randomPais1 = paisArray[Math.floor(Math.random()*paisArray.length)];
var randomPais2 = paisArray[Math.floor(Math.random()*paisArray.length)];

var randomCapital1 = capitalArray[Math.floor(Math.random()*capitalArray.length)];
var randomCapital2 = capitalArray[Math.floor(Math.random()*capitalArray.length)];

for (i = 0; i < 10; i++) {
  if (pais != randomPais1) { break; }
  var randomPais1 = paisArray[Math.floor(Math.random()*paisArray.length)];
}

for (i = 0; i < 10; i++) {
  if (pais != randomPais2) { break; }
  var randomPais2 = paisArray[Math.floor(Math.random()*paisArray.length)];
}

for (i = 0; i < 10; i++) {
  if (capital != randomCapital1) { break; }
  var randomCapital1 = capitalArray[Math.floor(Math.random()*capitalArray.length)];
}

for (i = 0; i < 10; i++) {
  if (capital != randomCapital2) { break; }
  var randomCapital2 = capitalArray[Math.floor(Math.random()*capitalArray.length)];
}

/*
seção para publicar outras opções para as perguntas
*/

document.getElementById("randomPais1").innerHTML = randomPais1;
document.getElementById("randomPais2").innerHTML = randomPais2;
document.getElementById("randomCapital1").innerHTML = randomCapital1;
document.getElementById("randomCapital2").innerHTML = randomCapital2;

/*
seção para embaralhar as opções de publicação
*/

var ul1 = document.querySelector('#opais');
for (var i = ul1.children.length; i >= 0; i--) {
    ul1.appendChild(ul1.children[Math.random() * i | 0]);
}

var ul2 = document.querySelector('#acapital');
for (var i = ul2.children.length; i >= 0; i--) {
    ul2.appendChild(ul2.children[Math.random() * i | 0]);
}

/*
seção para publicar a quantidade de pontos e rodadas faltantes
*/

document.getElementById("pontos").innerHTML = pontos;
document.getElementById("rodadasfaltantes").innerHTML = "Rodadas faltantes: " + rodada;

/*
seção para finalizar o jogo!
*/

if (rodada == 0){
  alert("Você encerrou seu desafio\nO seu placar foi: " + pontos + " pontos!");
  window.location.reload();  
  }
}
