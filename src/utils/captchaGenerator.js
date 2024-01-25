const UpperCaseAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const captchaGenerator = (length = 4) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result +=
      UpperCaseAlphabet[generateRandomNumber(0, UpperCaseAlphabet.length - 1)];
  }

  return result;
};

export default captchaGenerator;
