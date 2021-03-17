const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  let dtname = [];
  if (!Array.isArray(members)) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    
    if (typeof(members[i]) == 'string') {
      members[i] = members[i].trim();
      let telpuch = members[i].split('');
      let lisa = telpuch.shift();
      dtname.push(lisa.toUpperCase());
    }
  }
  return dtname.sort().join('');

  
};
