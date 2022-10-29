//const words = ['add', 'boook', 'break'];
const words = ['ab', 'aab', 'abb', 'abab', 'abaaaba'];

const arrayResponse = [];
const search = (arr) => {
  const response = [];

  let previus;

  for (const element of arr) {
    if (element === previus) {
      response.push(element);
    }

    previus = element;
  }

  return !!response.length;
};

let objTeams = {};
for (const word of words) {
  const wordArray = [...word];

  if (search(wordArray)) {
    arrayResponse.push(1);
  } else {
    arrayResponse.push(0);
  }
}

console.log(arrayResponse);
