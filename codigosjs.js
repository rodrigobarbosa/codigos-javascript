// var id = 0;
// var id = 1;

// console.log(id);

// var nome = 'Pós graduação';
// console.log(`Curso de: ${nome}`);

// const n1 = 1, n2 = 2;
// console.log(`${n1}`)

// const horas = new Date().getHours();
// const mensagem = `Bom dia, são ${horas} horas`;
// console.log(mensagem);

let promise = new Promise((resolve, reject) => {
  let resultado = true;
  let tempo = 2000;

  setTimeout(() => {
    if(resultado) {
      resolve("deu tudo certo");
    } else {
      reject("deu tudo errado");
    }
    }, tempo)
  });

  promise.then((data) => console.log(`resultado positivo: ${data}`))
  promise.catch((data) => console.log(`resultado negativo: ${data}`))
