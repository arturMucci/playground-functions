// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(splitString) {
  // seu código aqui
  return splitString.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(vezes) {
  // seu código aqui
  let maior = vezes[0];
  let cont = 0;
  for (let i = 0; i < vezes.length; i += 1) {
    if (vezes[i] > maior) {
      maior = vezes[i];
      cont = 0;
    }
    if (vezes[i] === maior) {
      maior = vezes[i];
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let d1 = Math.abs(cat1 - mouse);
  let d2 = Math.abs(cat2 - mouse);
  if (d2 > d1) {
    return 'cat1';
  }
  if (d1 > d2) {
    return 'cat2';
  }
  if (d1 === d2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  // seu código aqui
  let arrayString;
  arrayString = [];
  for (let i = 0; i < arrayNum.length; i += 1) {
    let div3 = arrayNum[i] % 3 === 0;
    let div5 = arrayNum[i] % 5 === 0;
    if (div3) {
      arrayString[i] = 'fizz';
      if (div5) {
        arrayString[i] += 'Buzz';
      }
    } else if (div5) {
      arrayString[i] = 'buzz';
    } else {
      arrayString[i] = 'bug!';
    }
  }
  return arrayString;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let string2 = '';
  string2 = string.replace(/a/gi, '1').replace(/e/gi, '2').replace(/i/gi, '3').replace(/o/gi, '4').replace(/u/gi, '5');
  return string2;
}

function decode(string) {
  let string2 = '';
  string2 = string.replace(/1/gi, 'a').replace(/2/gi, 'e').replace(/3/gi, 'i').replace(/4/gi, 'o').replace(/5/gi, 'u');
  return string2;
  // seu código aqui
}// 'O rato roeu a roupa do rei de roma!'

// Desafio 10
function techList(array, b) {
  // seu código aqui
  array.sort(function (a, b) {
    let x = a.toUpperCase(), y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;
  });
  if (array.length === 0) {
    return 'Vazio!';
  } if (array) {
    for (let i = 0; i < array.length; i += 1) {
      let propriedade = array[i];
      array[i] = {
        tech: propriedade,
        name: b
      }
    }
  }
  return array;
}
console.log(techList([], 'Lucas'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
