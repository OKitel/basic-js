/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  constructor(isDirect = true) {
    this._isReverse = !isDirect;
  }

  encrypt = function (message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    const msg = message.toUpperCase();
    let keyWord = key.toUpperCase();

    keyWord = keyWord.repeat(msg.length).substring(0, msg.length);
    const code = [];
    const codeKey = [];
    let spaceCount = 0;
    for (let i = 0; i < msg.length; i++) {
      const numM = this.alphabet.indexOf(msg[i]);
      if (numM != -1) {
        code.push(numM);
      } else {
        if (msg[i] == ' ') {
          spaceCount++;
        }
        code.push(msg[i]);
      }

      const numK = this.alphabet.indexOf(keyWord[i - spaceCount]);
      if (numK != -1) {
        codeKey.push(numK);
      }
    }
    const resultNum = [];
    for (let i = 0; i < code.length; i++) {
      if (typeof code[i] == 'number') {
        let sum = code[i] + codeKey[i];
        if (sum > 25) {
          sum = sum - 26;
        }
        resultNum.push(sum);
      } else {
        resultNum.push(code[i]);
      }
    }
    const result = [];
    for (let i = 0; i < resultNum.length; i++) {
      if (typeof resultNum[i] == 'number') {
        const index = resultNum[i];
        result.push(this.alphabet[index]);
      } else {
        result.push(resultNum[i]);
      }
    }
    if (this._isReverse) {
      return result.reverse().join('');
    }
    return result.join('');
  };

  decrypt = function (message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    const msg = message.toUpperCase();
    let keyWord = key.toUpperCase();
    keyWord = keyWord.repeat(msg.length).substring(0, msg.length);
    const code = [];
    const codeKey = [];
    let spaceCount = 0;
    for (let i = 0; i < msg.length; i++) {
      const numM = this.alphabet.indexOf(msg[i]);
      if (numM != -1) {
        code.push(numM);
      } else {
        if (msg[i] == ' ') {
          spaceCount++;
        }
        code.push(msg[i]);
      }

      const numK = this.alphabet.indexOf(keyWord[i - spaceCount]);
      if (numK != -1) {
        codeKey.push(numK);
      }
    }
    const resultNum = [];
    for (let i = 0; i < code.length; i++) {
      if (typeof code[i] == 'number') {
        let sum = code[i] - codeKey[i];
        if (sum < 0) {
          sum = code[i] + 26 - codeKey[i];
        }
        resultNum.push(sum);
      } else {
        resultNum.push(code[i]);
      }
    }

    const result = [];
    for (let i = 0; i < resultNum.length; i++) {
      if (typeof resultNum[i] == 'number') {
        const index = resultNum[i];
        result.push(this.alphabet[index]);
      } else {
        result.push(resultNum[i]);
      }
    }

    if (this._isReverse) {
      return result.reverse().join('');
    }
    return result.join('');
  };
}

module.exports = {
  VigenereCipheringMachine,
};
