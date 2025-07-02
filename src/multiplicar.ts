function multiplicarNumero (num1 : number , num2 : number) : number{
    return num1 * num2
}

const valor = multiplicarNumero(15, 35);
console.log(valor);

//------------------------------//

const nomes = (nome : string) : string => `Olá ${nome}`;

const resposta = nomes("Eduarda");
console.log(resposta);

