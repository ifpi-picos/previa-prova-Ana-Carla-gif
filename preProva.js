export function verificarParOuImpar(numero) {
  if (typeof numero != "number") {
    return null; // o tipo precisa ser entre aspas
  }
  if (numero % 2 === 0) {
    return `Par`;
  } else {
    return `Ímpar`;
  }
}
export function maiorNumero(lista) {
  // utiliza Array.isArray para verificar se uma variavél é uma lista
  if (!Array.isArray(lista) || lista.length === 0) {
    return null;
  }
  return Math.max(...lista);
}


export function contarCaracter(nome) {
  if (typeof nome != "string") { //se o tipo do nome for diferente de string, já retorna null.
      return null;
  }
  let i = 0;       //contador para percorrer os índices (inicia pelo índice 0).
  let contar = 0;  //conntador para incrementar as letras encontradas.
  while (nome.length > i) {
      if (nome[i] === 'a' || nome[i] === 'A') { //se nesse determinado índice tiver 'a' ou 'A', acrescenta na variável 'contar'.
          contar++
      };
      i++
  } return contar};


   export function atualizarPropriedade(objeto,propriedade,valor){ // in é como se estivesse dentro 

    if(propriedade in objeto){
        objeto[propriedade] = valor
        return objeto
    }return null
   }
   

