```
 ts-node ./index.ts
{
  user1: Wallet {
    _isSigner: true,
    _signingKey: [Function (anonymous)],
    _mnemonic: [Function (anonymous)],
    address: '0x9b4e7B2609329Bd312C58fBEdb072eE07db2a2d5',
    provider: null
  }
}
{
  user2: Wallet {
    _isSigner: true,
    _signingKey: [Function (anonymous)],
    _mnemonic: [Function (anonymous)],
    address: '0xDEFEA0b8D71ED65072952e6c32bBF08CC5F06014',
    provider: null
  }
}
{
  tx1Signed: '0xf86b8085101cbe0f4582520894defea0b8d71ed65072952e6c32bbf08cc5f06014872386f26fc100008025a0c07d49a94040aaa8da6596506aa4ee08bee27ad58fa1f57a78d93c83734f6f71a059b595abce7932d3674b7cd8ea98ec27fb46ac4500527aa62b8fec958f37e466'
}
{
  tx2Signed: '0x02f8720180846b49d20085208cee6c8a825208949b4e7b2609329bd312c58fbedb072ee07db2a2d5872386f26fc1000080c080a094917f1d177d826388e522518c4701fd3c0af55a4dc9452dbf7147a5689501c1a00b38c734c94cb70fd81013529580f382a320baa74e6dcb9ec45c323737bd7cfb'
}
{
  signedTransactions: [
    '0xf86b8085101cbe0f4582520894defea0b8d71ed65072952e6c32bbf08cc5f06014872386f26fc100008025a0c07d49a94040aaa8da6596506aa4ee08bee27ad58fa1f57a78d93c83734f6f71a059b595abce7932d3674b7cd8ea98ec27fb46ac4500527aa62b8fec958f37e466',
    '0x02f8720180846b49d20085208cee6c8a825208949b4e7b2609329bd312c58fbedb072ee07db2a2d5872386f26fc1000080c080a094917f1d177d826388e522518c4701fd3c0af55a4dc9452dbf7147a5689501c1a00b38c734c94cb70fd81013529580f382a320baa74e6dcb9ec45c323737bd7cfb'
  ],
  targetBlockNumber: 18821650
}
{
  "bundleGasPrice": {
    "type": "BigNumber",
    "hex": "0x9a3df70e"
  },
  "bundleHash": "0xb9f2c89800d4e6eb16f4be87dc1427dcf7cc30201780cacc4635396902545c55",
  "coinbaseDiff": {
    "type": "BigNumber",
    "hex": "0x62d95624bae8"
  },
  "ethSentToCoinbase": {
    "type": "BigNumber",
    "hex": "0x00"
  },
  "gasFees": {
    "type": "BigNumber",
    "hex": "0x62d95624bae8"
  },
  "results": [
    {
      "txHash": "0xbf2b1226c59e7ce5fe379dd26ba53259660915e3a4c9fbe5a9ee9be0767b7fae",
      "gasUsed": 21000,
      "gasPrice": "3375504413",
      "gasFees": "70885592673000",
      "fromAddress": "0x9b4e7B2609329Bd312C58fBEdb072eE07db2a2d5",
      "toAddress": "0xDEFEA0b8D71ED65072952e6c32bBF08CC5F06014",
      "coinbaseDiff": "70885592673000",
      "ethSentToCoinbase": "0",
      "value": "0x"
    },
    {
      "txHash": "0x47fad22d71dcc7058a9939b2e57feed8d87c3daea4d1871a7304cb4cb8dba9a9",
      "gasUsed": 21000,
      "gasPrice": "1800000000",
      "gasFees": "37800000000000",
      "fromAddress": "0xDEFEA0b8D71ED65072952e6c32bBF08CC5F06014",
      "toAddress": "0x9b4e7B2609329Bd312C58fBEdb072eE07db2a2d5",
      "coinbaseDiff": "37800000000000",
      "ethSentToCoinbase": "0",
      "value": "0x"
    }
  ],
  "stateBlockNumber": 18821649,
  "totalGasUsed": 42000
}
```