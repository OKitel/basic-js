const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(type) {
    if (type == true) {
    }
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }
    let code = message.toUpperCase();
    let codeKey = key.toUpperCase();
  }
  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }
    let code = message.toUpperCase();
    let codeKey = key.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
