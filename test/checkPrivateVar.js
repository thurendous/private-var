const {
    time,
    loadFixture,
} = require('@nomicfoundation/hardhat-network-helpers')
const { anyValue } = require('@nomicfoundation/hardhat-chai-matchers/withArgs')
const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('LoginContract', function () {
    // this is the test we run to reveal the private variable
    it('should show us private variable data', async function () {
        const LoginContract = await ethers.getContractFactory('LoginContract')

        const userName = ethers.utils.formatBytes32String('calvin')
        const password = ethers.utils.formatBytes32String(
            'passwordIsMyBigSecret'
        )

        const loginContract = await LoginContract.deploy(userName, password)

        await loginContract.deployed() // wait for it to be deployed

        // get storage from contract
        // storage structure
        // byte32 is 1 slot each
        // slot 0 is userName
        // slot 1 is password
        // you can use getStorageAt method to read every single slot of the contract
        // as a reasult of this , theere is no any secret there
        const slot0 = await ethers.provider.getStorageAt(
            loginContract.address,
            0
        )
        const slot1 = await ethers.provider.getStorageAt(
            loginContract.address,
            1
        )
        const formatUsername = await ethers.utils.parseBytes32String(slot0)
        const formatPassword = await ethers.utils.parseBytes32String(slot1)

        console.log('userName should be ->', formatUsername)
        console.log('password should be ->', formatPassword)
    })
})
