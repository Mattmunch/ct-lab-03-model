const { mkdirp } = require('../fs-functions');
const fs = require('fs').promises;



describe('fs-functions', () => {

  beforeAll(() => {
    return mkdirp('./test-files');
  });
  afterAll(() => {
    return fs.rmdir('./test-files', { recursive: true });
  });
  describe('mkdirp', () => {
    it('makes a directory and all the parent directorites', () => {
      return mkdirp('i/love/coding').then(() => {
        expect(fs.mkdirp).toHaveBeenLastCalledWith('i/love/coding');
      })  ;
    });
  });
})
;
