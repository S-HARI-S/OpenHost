import Deployer from '../contracts/deploysupertoken'
import Web3 from 'web3';

class DeployerSuperToken {

    async fetchAccount() {
        try {
            var myAccount = await window.ethereum.enable();
            if (Array.isArray(myAccount)) {
                myAccount = myAccount[0]
            }

            this.web3 = new Web3(window.ethereum);

            this.Deployer = new this.web3.eth.Contract(this.contractAbi, this.contractAddress);
            this.Deployer.options.address = this.contractAddress;
            this.Deployer.defaultAccount = myAccount;
            this.Deployer.options.from = myAccount;
            this.Deployer.defaultChain = 5;

        } catch (e) {
            console.log("constructor " + e);
        }
    }

    constructor() {
        this.contractAbi = Deployer.abi;
        this.contractAddress = "0x8499990f3a30A9Be22360Ded85f8f79eEBFDEEf2";
    }

    async deployContract(name, symbol, receiver, initialSupply) {
        await this.fetchAccount();
        await this.Deployer.methods.deploySuperToken(name, symbol, receiver, initialSupply).send();
    }

}

export default DeployerSuperToken;