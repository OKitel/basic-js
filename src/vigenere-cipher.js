class VigenereCipheringMachine {
  alphabet = [
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
  ];

  constructor(isDirect = true) {
    this._isReverse = !isDirect;
  }

  encrypt = function (message, key) {
    if (message == undefined || key == undefined) {
      throw new Error("Need 2 arguments");
    }
    let msg = message.toUpperCase();
    let keyWord = key.toUpperCase();
    let maxLength = Math.max(msg.length, keyWord.length);
    keyWord = keyWord.repeat(maxLength).substring(0, msg.length);
    let code = [];
    let codeKey = [];
    let k = 0;
    for (let i = 0; i < maxLength; i++) {
      let numM = this.alphabet.indexOf(msg[i]);
      if (numM != -1) {
        code.push(numM);
      } else {
        if (msg[i] == " ") {
          code.push(msg[i]);
          k++;
        } else {
          code.push(msg[i]);
        }
      }

      let numK = this.alphabet.indexOf(keyWord[i - k]);
      if (numK != -1) {
        codeKey.push(numK);
      }
    }
    let resultNum = [];
    for (let i = 0; i < code.length; i++) {
      if (typeof code[i] == "number") {
        let sum = code[i] + codeKey[i];
        if (sum > 25) {
          sum = sum - 26;
        }
        resultNum.push(sum);
      } else {
        resultNum.push(code[i]);
      }
    }
    let result = [];
    for (let i = 0; i < resultNum.length; i++) {
      if (typeof resultNum[i] == "number") {
        let index = resultNum[i];
        result.push(this.alphabet[index]);
      } else {
        result.push(resultNum[i]);
      }
    }
    if (this._isReverse == true) {
      return result.reverse().join("");
    }
    return result.join("");
  };

  decrypt = function (message, key) {
    if (message == undefined || key == undefined) {
      throw new Error("Need 2 arguments");
    }
    let msg = message.toUpperCase();
    let keyWord = key.toUpperCase();
    let maxLength = Math.max(msg.length, keyWord.length);
    keyWord = keyWord.repeat(maxLength).substring(0, msg.length);
    let code = [];
    let codeKey = [];
    let k = 0;
    for (let i = 0; i < maxLength; i++) {
      let numM = this.alphabet.indexOf(msg[i]);
      if (numM != -1) {
        code.push(numM);
      } else {
        if (msg[i] == " ") {
          code.push(msg[i]);
          k++;
        } else {
          code.push(msg[i]);
        }
      }

      let numK = this.alphabet.indexOf(keyWord[i - k]);
      if (numK != -1) {
        codeKey.push(numK);
      }
    }
    let resultNum = [];
    for (let i = 0; i < code.length; i++) {
      if (typeof code[i] == "number") {
        let sum = code[i] - codeKey[i];
        if (sum < 0) {
          sum = code[i] + 26 - codeKey[i];
        }
        resultNum.push(sum);
      } else {
        resultNum.push(code[i]);
      }
    }

    let result = [];
    for (let i = 0; i < resultNum.length; i++) {
      if (typeof resultNum[i] == "number") {
        let index = resultNum[i];
        result.push(this.alphabet[index]);
      } else {
        result.push(resultNum[i]);
      }
    }

    if (this._isReverse == true) {
      return result.reverse().join("");
    }
    return result.join("");
  };
}

module.exports = VigenereCipheringMachine;
