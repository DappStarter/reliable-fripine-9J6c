require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remain soft harvest local fortune skill'; 
let testAccounts = [
"0x3e08e7c0fe0a19584c8f206bbea27aae8d832047e8e53a346116ae3462a252f5",
"0xa800613384cf8c4e8c9fc445e4891f2c783a6286e4ed7714e5e60eb20dede90c",
"0x350b8bf51d6596b0ce466301dd20310aaf00f237fb8d9dfb32d3d213ce58b824",
"0xf1ec2f90d74fc885ab83df72bda932d59427c326cf489574ea0d7a8e8f495773",
"0x6d4ff62c880fc1a22f0b229d1e7a62fa0b529a65ec2bde3cf572f03c435f123b",
"0x3096224576b214ce22bdb528c06de8f49c0f6277a1ff3b34ff451d10c837d6ff",
"0xb985f32cc0063039006da91d258f34cf73a768399e79c7ddab1368241860dd2f",
"0x0ddfc0c43e705241d453f3c770b784db187a17baf456b7b89ab6e213c15d08ce",
"0xd2bfcd51da01d67bce87ddd50b158de953d92636b5a3d720054355827352c4ca",
"0xaefe53be2699baf3e4697c46fb37184978a2c1436bb369e99a228d975f8125e1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

