const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = '';
  if (Array.isArray(members)) {
    const newMembers = members.map((name) => {
      if (typeof name == 'string' && isNaN(name)) {
        return name.trim();
      }
    });
    newMembers.forEach((name) => {
      if (typeof name == 'string' && isNaN(name)) {
        teamName += name[0];
      }
    });
    const letterArray = teamName.toUpperCase().split('').sort();
    return letterArray.join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
