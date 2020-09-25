function findLongestWord(string = '') {
  // Write code under this line

  //1.превращаем строку в массив
  //2.создаем переменные максимальная длина и самое длинное слово
  //3.перебираем массив и сравниваем максимальную длину с элементом массива,
  //если выполняется - присваиваем макс.длине - длину єлемента массива, а самому длинному слову - знач.єлемента массива
  //4.возвращаем самое длинное слово
  let maxLength = 0;
  let longestWord = '';
  const str = string.split(' ');
  for (const variable of str) {
    if (maxLength < variable.length) {
      maxLength = variable.length;
      longestWord = variable;
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'
console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
