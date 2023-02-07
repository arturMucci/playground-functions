// Desafio 11
function montaTelefone(vetor) {
  let string = [];
  let retorno = '';
  let j = 0;
  for (let i = 0; i < vetor.length + j; i += 1) {
    if (i === 0) {string.push('(');
      j += 1;} 
    if (i === 3) {string.push(')');
      j += 1;} 
    if (i === 4) {string.push(' ');
      j += 1;}
    if (i === 10) {string.push('-');
      j += 1;}
    string.push(vetor[i-j]);
    }
  }
  for (let i = 0; i < vetor.length + j; i += 1) {
    retorno += string[i];
  }
return retorno;
}

function verificaConteudo(vetor) {
  for (let i = 0; i < vetor.length; i += 1) {
    if (vetor[i] > 9) {
      return true;
    }
    if (vetor[i] < 0) {
      return true;
    }
    let cont = 0;
    for (let k = 0; k < vetor.length; k += 1) {
      if (vetor[i] === vetor[k]) {
        cont += 1;
      }
      if (cont >= 3) {
        return true;
      }
    }
  }
  return false;
}

function generatePhoneNumber(arrayNumeros) {
  // seu código aqui
  if (arrayNumeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (verificaConteudo(arrayNumeros)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return montaTelefone(arrayNumeros);
}



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return lineA < lineB + lineC && lineA > Math.abs(lineB-lineC);
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let reg = /\d+/g;
  let result = string.match(reg);
  let sum = 0;
  let retorno = '';
  for (let i = 0; i < result.length; i += 1) {
    sum += Number(result[i]);
  }
  if (result.length === 1) {
    retorno = '1 copo de água';
  } else {
    retorno = '1 copos de água';
  }

  return retorno.replace(reg, sum);
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

