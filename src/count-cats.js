const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    return backyard.reduce((sum,current) => {
        let state = current.filter((item) => item === "^^").length;
        return sum = sum + state;
    }, 0);
};
