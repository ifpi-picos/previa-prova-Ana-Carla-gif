export function verificarParOuImpar(numero){
 if(typeof numero != "number" ){
    return null  // o tipo precisa ser entre aspas
 }
    if(numero % 2 === 0){
    return `Par`


    } else{
        return `Ímpar`
    } } 
    export function maiorNumero(lista){ // utiliza Array.isArray para verificar se uma variavél é uma lista
     if(!Array.isArray(lista) || lista.length === 0 ){
            return null;
        }
        return Math.max (... lista);
    }




//    export function atualizarPropriedade(objeto,propriedade,valor){

//     if(propriedade in objeto){
//         objeto[propriedade] = valor
//     }
//    }