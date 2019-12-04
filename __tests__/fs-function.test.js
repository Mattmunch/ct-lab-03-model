const { mkdirp, writeJSON } = require('../fs-functions');
const fs = require('fs').promises;



describe('fs-functions', () => {

  beforeAll(() => {
    return mkdirp('./test-files');
  });
  afterAll(() => {
    return fs.rmdir('./test-files', { recursive: true });
  });
  it('can write an object to a file', () => {
    return writeJSON('./test-files/dogs', {
      name: 'buckwheat',
      age: 5,
      weight: '20 lbs'
    })
      .then(() => {
        return fs.readFile('./test-files/dogs', 'utf-8');
      })
      .then(fileData => {
        expect(JSON.parse(fileData)).toEqual({
          name: 'buckwheat',
          age: 5,
          weight: '20 lbs'
        });
      });
  });
  
})
;
