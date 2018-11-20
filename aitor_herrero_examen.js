var vueltas = [];
var salir = false;
var media1 = 0;

while (salir == false){
  let vueltatiempo = Number(prompt("Introduce el tiempo de la vuelta"));
  if (vueltatiempo > 0){
    vueltas.push(vueltatiempo);
    console.log(vueltas);
  }
  var exit = prompt("¿Desea salir del programa? En caso afirmativo teclee salir");
    if (exit == "salir"){
      salir = true;
    }else{
      salir = false;
    }
}
bestresultado();
worstresultado();
media();

function bestresultado(){
  for (x = 0; x < vueltas.length; x++){
    let y = x + 1;
    if (vueltas[x] < vueltas[y]){
      var bestresultado = vueltas[x];
    }else if (vueltas[y] > 0){
      var bestresultado = vueltas[y];
    }
  }
  console.log(bestresultado);
}
function worstresultado(){
  for (j = 0; j < vueltas.length; j++){
    let k = j + 1;
    if (vueltas[j] > vueltas[k]){
      var worstresultado = vueltas[j];
    }else if (vueltas[k] > 0){
      var worstresultado = vueltas[k];
    }
  }
  console.log(worstresultado);
}
function media(){
  for (var i = 0; i < vueltas.length; i++) {
    media1=vueltas[i]+media1;
  }
  media = media1/i;
  console.log(media);
}

document.write("Media de canastas de tiempo: "+media+"");
