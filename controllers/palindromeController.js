const palindromeWords = [
  "civic", "deified", "level", "madam", "radar", "racecar", "refer", "rotor", "sagas", "solos", "stats", "tenet"
];

function getRandomPalindromes(count) {
  const shuffled = palindromeWords.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

exports.checkWord = async (req, res) => {
    try {
      const { word } = req.body;
      const lowerCaseWord = word.toLowerCase();
      const reversedWord = word.split('').reverse().join('');
      const isPalindrome = word === reversedWord;
      const randomPalindromes = getRandomPalindromes(5);
      res.json({ word: lowerCaseWord, reversedWord, isPalindrome, randomPalindromes });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  function isRotationallySymmetric(num) {
    const numStr = num.toString();
    const validChars = { '0': '0', '1': '1', '6': '9', '8': '8', '9': '6' };
    const reversedNumStr = numStr.split('').reverse().map(char => validChars[char]).join('');
    return reversedNumStr === numStr;
  }
  
  function generateSymmetricNumbers(count) {
    const symmetricNumbers = [];
    let num = 1;
    while (symmetricNumbers.length < count) {
      if (isRotationallySymmetric(num)) {
        symmetricNumbers.push(num);
      }
      num++;
    }
    return symmetricNumbers;
  }

  exports.checksymmetricNumbers = async (req, res) => {
    try {
        const { count } = req.body;
        if (isNaN(count) || count <= 0) {
          return res.status(400).json({ error: 'Invalid count' });
        }
        const symmetricNumbers = generateSymmetricNumbers(count);
        res.json({ symmetricNumbers });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
  };