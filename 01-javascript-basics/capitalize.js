const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.substring(1).toLowerCase();

  return `${firstLetter}${restOfWord}`;
};

console.log(capitalize('yanis')); // => "Yanis"
