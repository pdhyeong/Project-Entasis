const ERC1400 = artifacts.require('ERC1400');
module.exports = async function(deployer) {
  deployer.deploy(ERC1400, 'ENTAToken', 'ENTA', '0x9c3B07e4d0E97d08dF6EB4320687f8C64D0dacCB'); // 가나슈 재실행시 수정 필요!
  // const token = await ERC1400.deployed();
}