module.exports = function(ngModule) {

  describe('kcd-test', function() {

    beforeEach(window.module(ngModule.name));

    it('schould pass', function() {
      expect(true).to.be.true;
    });

  });

}