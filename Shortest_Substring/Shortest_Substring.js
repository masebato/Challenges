const input = 'annnnnnngggcasdffgfffffffd';

const elements = [...input];
let diccionary = {};
const arrayDiccionary = [];
let previus;

for (const element of elements) {
  if (element === previus) {
    if (!diccionary[element]) {
      diccionary[element] = 1;
    }
    diccionary[element] += 1;
  } else {
    arrayDiccionary.push(diccionary);
    diccionary = {};
  }

  previus = element;
}
const countRepeted = [];
arrayDiccionary.forEach((element) => {
  if (Object.keys(element).length) {
    countRepeted.push(Object.values(element));
  }
});

console.log(countRepeted.flat().sort()[0]);
