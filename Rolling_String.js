const operations = ['0 0 L', '2 2 L', '0 2 R'];

const s = 'abc';

const directory = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
};
let arrayOperation;

let stringArray = s;
for (const operation of operations) {
  arrayOperation = operation.split(' ');
  let chartUse;

  if (arrayOperation[0] === arrayOperation[1]) {
    chartUse = stringArray.substring(
      +arrayOperation[0],
      +arrayOperation[0] + 1
    );
  } else {
    chartUse = stringArray.substring(+arrayOperation[0], +arrayOperation[1]);
  }
  let keys = '';
  for (const stringItem of stringArray.split('')) {
    keys += directory[stringItem];
  }
  const keysArray = [...chartUse];
  stringArray = [...keys];
  for (const keyIterator of keysArray) {
    for (let index = 0; index < stringArray.length; index++) {
      const element = stringArray[index];
      if (stringArray[index] == keyIterator) {
        let currentKey;
        if (arrayOperation[3] === 'R') {
          if (element == 26) {
            currentKey = 0;
            stringArray[index] = currentKey;
          } else {
            currentKey = element;
            currentKey += 1;
            stringArray[index] = currentKey;
          }
        } else {
          if (element == 1) {
            currentKey = 26;
            stringArray[index] = currentKey;
          } else {
            currentKey = element;
            currentKey -= 1;
            stringArray[index] = currentKey;
          }
        }
      }
    }
  }

  for (let index = 0; index < stringArray.length; index++) {
    for (const key in directory) {
      const element = directory[key];

      if (stringArray[index] == element) {
        stringArray[index] = key;
      }
    }
  }
  stringArray = stringArray.join('');
  console.log(stringArray);
}

console.log(stringArray);
