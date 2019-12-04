const fs = require('fs').promises;

const mkdirp = (path) => {
  return fs.mkdir(path, { recursive: true });
};

const writeJSON = (path, data) => {
  return fs.writeFile(path, JSON.stringify(data))
    .then(() => {
      return data;
    });
};

const readJSON = (path) => {
  return fs.readFile(path);
};





module.exports = {
  mkdirp,
  writeJSON,
  readJSON
};
