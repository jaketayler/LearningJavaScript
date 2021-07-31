//Media 70 
var notasJoao = [00,00,01];

console.log(mediaDoAluno(notasJoao));

function mediaDoAluno(notas){
  var soma = 0;
  
  for(var nota of notas){
    soma +=  nota;
  }
  const media = soma/(notas.length);
  
  if(media < 59 ) return 'F';
  if(media < 69 ) return 'D';
  if(media < 79 ) return 'C';
  if(media < 89 ) return 'B';
  return 'A';
  
}