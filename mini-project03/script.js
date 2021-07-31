// FizzBuzz

const result = fizzBuzz(12);
console.log(result);

function fizzBuzz(n){
  if(typeof n !== 'number'){
    return ' Não é um número, digite um número!!'
  } else if((n % 3 == 0) && (n % 5 == 0)){
    return "FizzBuzz";
  }else if(n % 3 == 0){
    return "Fizz";
  }else if(n % 5 == 0){
    return "Buzz";
  }else{
    return n;
  }
}