const EventLogger = artifacts.require('EventLogger');

module.exports = function (deployer, network) {
  return deployer.then(function () {
    return EventLogger.new();
  });
};
