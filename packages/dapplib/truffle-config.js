require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom process only venture story cruise maze collect gentle light army gaze'; 
let testAccounts = [
"0x0055a995e7ef9b40fccd2256ce3dee7ec7807b4f8ab4ff96df13b7657726c938",
"0x83c2bf95f7d8cd1e2ef42656f5d80f4647778e698a64179d8edda97dfe374232",
"0x1b868e48c01f44ec70058c648c4e9b26108f2069c7af270e84b6b9159870fefb",
"0x4d8a4ccc84dea2f90ee5a64802b317fcd1e1824b00a588068dca6fd497d69709",
"0x5772d306de25c940306d0359862ccebb7b4902bc156ce017641993c91628255b",
"0x1ad3e2875092f418327ac3ab0e01ab5a7b6c95487abf421d7ac69f1b2f121184",
"0x040b9212be30ec09c0ed32861f3677b2108e96681f95d4fa988f96c710a59052",
"0x0289086b54e22d66ede86aee39dbc77de9717561686bf30d777ecb1d9ab25ee2",
"0x28396ec6347d9c96f0e77207dce750b4e93139831ad42a54d2125b42087d9f90",
"0xb2964b0af360de76891bcac685a4f2b2bef369c3ad7b95976db7b00e99463601"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

