const CustomError = require("../extensions/custom-error");

let chainMaker = {
  arr: [],

  reverseChain: function () {
    this.arr = this.arr.reverse();
    return this;
  },

  addLink: function (value) {
    this.arr.push(String(value));
    return this;
  },

  removeLink: function (position) {
    if(Number.isInteger(position) === false || position <= 0 || position > this.getLength()) {
      this.arr = [];
      throw new Error("Wrong link");
    }
    this.arr.splice(position-1, 1);
    return this;
  },

  getLength: function () {
    return this.arr.length;
  },

  finishChain: function () {
    let finalStr = "";
    for (let i = 0; i < this.arr.length; i++) {
      if (i + 1 === this.arr.length) {
        finalStr = finalStr + "( " + this.arr[i] + " )";
      } else {
        finalStr = finalStr + "( " + this.arr[i] + " )~~";
      }
    }
    this.arr = [];
    return finalStr;
  }
};

module.exports = chainMaker;
