const Example = artifacts.require('Example');

contract('Example', accounts => {

  beforeEach(async function () {
    this.example = await Example.new({ from: accounts[0] });
  });

  it('Have event logging when do something', async function () {
    await this.example.doSomething({from: accounts[0]});
    assert.isOk(false);
  });

});
