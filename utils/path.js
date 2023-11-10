const path = require("path");

function cwd(/** @type {string[]} */ ...args) {
  return path.resolve(process.cwd(), ...args);
}

exports.cwd = cwd;
