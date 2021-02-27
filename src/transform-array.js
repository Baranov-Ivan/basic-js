const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    const commands = ["--discard-next", "--discard-prev", "--double-next","--double-prev"];
    let arrCopy = arr.slice();
    let transformedArray = [];

    for(let i = 0; i < arrCopy.length; i++) {
      switch(arrCopy[i]) {
        case "--discard-next":
          if(i+1 < arr.length) {
            arrCopy.splice(i+1,1);
          }
          break;
        case "--discard-prev":
          if(i-1 > -1 && commands.indexOf(arrCopy[i-1]) === -1) {
            arrCopy.splice(i-1,1);
          }
          break;
        case "--double-next":
          if(i+1 < arr.length) {
            arrCopy.splice(i+1,0, arrCopy[i+1]);
          }
          break;
        case "--double-prev":
          if(i-1 > -1 && commands.indexOf(arrCopy[i-1]) === -1) {
            arrCopy.splice(i-1,0, arrCopy[i-1]);
            i++;
          }
          break;
        default:
          break;
      }

    }

    transformedArray = arrCopy.filter(item => commands.indexOf(item) === -1 && typeof item !== "undefined");
    return transformedArray;
};
