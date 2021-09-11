/* https://www.youtube.com/watch?v=3o5d-tdVscU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=35&ab_channel=jonmircha */

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

//1
/* const contarCaracteres = (string = '') => {
  string = isNaN(string) || '';
  console.log(`Tu cadena de texto tiene ${string.length} caracteres`);
};

contarCaracteres(); */

//2
/* const cortarTexto = (string, caracteres) => {
  console.log(string.slice(0, caracteres));
};

cortarTexto('Hola Mundo', 4); */

//3
/* const separarString = (string, separador) => {
  console.log(string.split(separador));
};

let espacio = '';

separarString('casa', espacio); */

//4
/* const repetirTexto = (string, repetidor) => {
  for (i = 0; i < repetidor; i++) {
    console.log(string);
  }
};

repetirTexto('Elias', 4); */
