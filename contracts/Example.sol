pragma solidity ^0.4.17;

import "./EventLogger.sol";

contract Example is EventLogger {

  constructor () {

  }

  function doSomething() public {
    uint num = block.number * 2;
    // Log number
    emit Uint(num);
    // Log address
    emit Address(address(this));
  }
}
