function verificaVelocidade(velocidade){
  const velocidadePermitida = 70;
  
  if(velocidade <= velocidadePermitida){
    return "Você dentro do limite de velocidade permitido."
  } else{
    var pontosCarteira = Math.floor((velocidade - velocidadePermitida)/5);     
    
    if(pontosCarteira >= 12 ){
     return "Carteira suspensa!";
    }
  }
}

// console.log(verificaVelocidade(165));