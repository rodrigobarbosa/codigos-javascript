var substr = function(query="teste", string1, string2){
  var substrempty = '';

  console.log("qualquer coisa");

  for (var i = string1; i < string2; i++){
    substrempty += query[i];
  }
  console.log(substrempty);

  return substrempty;
}

console.log(substr("outroteste", 1, 3));
