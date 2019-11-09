function validaCpf(cpf = ""){
  var digitoVerificador1;
  var digitoVerificador2;
  var soma = 0;

  if(cpf === "00000000000"
    || cpf === "11111111111"
    || cpf === "22222222222"
    || cpf === "33333333333"
    || cpf === "44444444444"
    || cpf === "55555555555"
    || cpf === "66666666666"
    || cpf === "77777777777"
    || cpf === "88888888888"
    || cpf === "99999999999"
  )
  return false;

  for (var i = 0; i < 9; i++){
    soma += parseInt(cpf[i]) * (10 - i);
  }

  digitoVerificador1 = (soma * 10) % 11;
  if(digitoVerificador1 > 9) digitoVerificador1 = 0;

  soma = 0;
  for(var i = 0; i < 10 ; i++){
    soma += parseInt(cpf[i]) * (11 - i);
  }

  digitoVerificador2 = (soma * 10) % 11;
  if(digitoVerificador2 > 9) digitoVerificador2 = 0;

  console.log([digitoVerificador1, digitoVerificador2]);
  if(digitoVerificador1 !== parseInt(cpf[9]) || 
  digitoVerificador2 !== parseInt(cpf[10])){
    return false;
  }

  return true;
}

console.log(validaCpf("12345678909"))
