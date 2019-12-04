const fs = require('fs').promises;

const mkdirp = (path) => {
  return fs.mkdir(path, { recursive: true });
};

let fileContents = '';

const writeJSON = (path, data) => {
  return fs.writeFile(path, JSON.stringify(data))
    .then(() => {
      return data;
    });
};





module.exports = {
  mkdirp,
  writeJSON
};
