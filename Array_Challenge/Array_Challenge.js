const array = [2, 1, 3];
const result = [];

let previus = 0;
for (let i = 0; i < array.length; i++) {
  let contador = 0;
  previus = array[i];
  for (let j = i - 1; j >= 0; j--) {
    if (i >= 1) {
      const actual = array[j];
      if (actual <= previus) {
        contador += Math.abs(previus - actual);
      } else {
        contador -= Math.abs(previus - actual);
      }
    }
  }
  result.push(contador);
}

console.log(result);

//no es optimo
