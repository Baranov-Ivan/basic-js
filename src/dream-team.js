const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false;
  }

  let dreamTeam = [];
  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] === "string") {
      dreamTeam.push(members[i].trim().charAt(0));
    }
  }
  dreamTeam.sort((a, b) => a.localeCompare(b));
  return dreamTeam.join('').toUpperCase();
};
