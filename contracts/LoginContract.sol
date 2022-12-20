// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract LoginContract {
    bytes32 private userName;
    bytes32 private password;

    constructor(bytes32 _username, bytes32 _password) {
        userName = _username;
        password = _password;
    }
}
