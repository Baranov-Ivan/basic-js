const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(value) {
    if(value || arguments.length === 0) {
      this.type = "direct";
    } else {
      this.type = "reverse";
    }
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.alhpabetLength = this.alphabet.length;
  }

  encrypt(message, key) {
    if(arguments.length < 2 || typeof message !== "string" || typeof key !== "string") {
      throw new Error("Wrong parameters for encryption!");
    }

    let messageArr = message.split("");
    let onlyLettersArr = message.replace(/[^a-z]+/gi, '').split('');
    let keyArr = [];

    if(onlyLettersArr.length > key.length) {
      keyArr = key.repeat(onlyLettersArr.length).split("");
    } else {
      keyArr = key.split("");
    }

    let resArr = [];
    let i = 0;
    let j = 0;
    for(i = 0; i < messageArr.length; i++) {
      if(this.alphabet.indexOf(messageArr[i].toUpperCase()) > -1) {
        let currentState = (this.alphabet.indexOf(onlyLettersArr[j].toUpperCase()) + this.alphabet.indexOf(keyArr[j].toUpperCase())) % this.alhpabetLength;
        resArr[i] = this.alphabet[currentState];
      } else {
        resArr[i] = messageArr[i];
        j--;
      }
      j++;
    }

    if(this.type === "direct") {
      return resArr.join("");
    } else if(this.type === "reverse") {
      return resArr.reverse().join("");
    }
  }

  decrypt(encryptedMessage, key) {
    if(arguments.length < 2 || typeof encryptedMessage !== "string" || typeof key !== "string") {
      throw new Error("Wrong parameters for decryption!");
    }

    let messageArr = encryptedMessage.split("");
    let onlyLettersArr = encryptedMessage.replace(/[^a-z]+/gi, '').split('');
    let keyArr = [];

    if(onlyLettersArr.length > key.length) {
      keyArr = key.repeat(onlyLettersArr.length).split("");
    } else {
      keyArr = key.split("");
    }

    let resArr = [];
    let i = 0;
    let j = 0;
    for(i = 0; i < messageArr.length; i++) {
      if(this.alphabet.indexOf(messageArr[i].toUpperCase()) > -1) {
        let currentState = (this.alphabet.indexOf(onlyLettersArr[j].toUpperCase()) + this.alhpabetLength - this.alphabet.indexOf(keyArr[j].toUpperCase())) % this.alhpabetLength;
        resArr[i] = this.alphabet[currentState];
      } else {
        resArr[i] = messageArr[i];
        j--;
      }
      j++;
    }

    if(this.type === "direct") {
      return resArr.join("");
    } else if(this.type === "reverse") {
      return resArr.reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
