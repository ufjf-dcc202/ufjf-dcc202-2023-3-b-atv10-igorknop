let maria = 2;
let joao = 1;

export function getJoao() {
  return joao;
}

export function getMaria() {
  return maria;
}

export function setJoao(novoValor) {
  joao = novoValor;
}

export function setMaria(novoValor) {
  maria = novoValor;
}





function deJoaoParaMaria() {
  maria = maria + joao;
  joao = 0;
  console.log("João agora tem ", joao, "maçãs");
}

function deMariaParaJoao() {
  joao = joao + maria;
  maria = 0;
}



export { deJoaoParaMaria, deMariaParaJoao };