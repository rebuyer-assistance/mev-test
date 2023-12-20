# Test 1
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
# Test 2

```
 ts-node index.ts
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
  tx1Signed: '0xf86b8085113cd695e782520894defea0b8d71ed65072952e6c32bbf08cc5f06014872386f26fc100008026a02ec981bc7164f4724888fb3fc1f3ae77f3b8483c0c605c21c8e02aaa408f6688a0089af04974575c67ab592ec323284bb45b8774a8d672107c637d74655b4b0326'
}
{
  tx2Signed: '0x02f87301808502cb4178008522cd298ef0825208949b4e7b2609329bd312c58fbedb072ee07db2a2d5872386f26fc1000080c080a00f500072743882f1a4d23c785671dd971f976a61db5389eef7e757d034386551a00aa49ba548b95cbaec67c26e3a2692928e308d89f254aa1582abc327071a2677'
}
{
  signedTransactions: [
    '0xf86b8085113cd695e782520894defea0b8d71ed65072952e6c32bbf08cc5f06014872386f26fc100008026a02ec981bc7164f4724888fb3fc1f3ae77f3b8483c0c605c21c8e02aaa408f6688a0089af04974575c67ab592ec323284bb45b8774a8d672107c637d74655b4b0326',
    '0x02f87301808502cb4178008522cd298ef0825208949b4e7b2609329bd312c58fbedb072ee07db2a2d5872386f26fc1000080c080a00f500072743882f1a4d23c785671dd971f976a61db5389eef7e757d034386551a00aa49ba548b95cbaec67c26e3a2692928e308d89f254aa1582abc327071a2677'
  ],
  targetBlockNumber: 18826352
}
{
  "bundleGasPrice": {
    "type": "BigNumber",
    "hex": "0x01f1d33ed5"
  },
  "bundleHash": "0x3f06eca0695344606a1cd55445611967ed68d5f872ebe6b6a0501edd615127fa",
  "coinbaseDiff": {
    "type": "BigNumber",
    "hex": "0x013f0a71746150"
  },
  "ethSentToCoinbase": {
    "type": "BigNumber",
    "hex": "0x00"
  },
  "gasFees": {
    "type": "BigNumber",
    "hex": "0x013f0a71746150"
  },
  "results": [
    {
      "txHash": "0xc128e7e12175251b156296826e8b8ec5d1cbf2586a8d86778baca115eedc5872",
      "gasUsed": 21000,
      "gasPrice": "4704241066",
      "gasFees": "98789062386000",
      "fromAddress": "0x9b4e7B2609329Bd312C58fBEdb072eE07db2a2d5",
      "toAddress": "0xDEFEA0b8D71ED65072952e6c32bBF08CC5F06014",
      "coinbaseDiff": "98789062386000",
      "ethSentToCoinbase": "0",
      "value": "0x"
    },
    {
      "txHash": "0x1f0cc9919cf4ae7ea9cd1024e29f6cb31a5deba117def39d0a74a6fa6f6ebaf7",
      "gasUsed": 21000,
      "gasPrice": "12000000000",
      "gasFees": "252000000000000",
      "fromAddress": "0xDEFEA0b8D71ED65072952e6c32bBF08CC5F06014",
      "toAddress": "0x9b4e7B2609329Bd312C58fBEdb072eE07db2a2d5",
      "coinbaseDiff": "252000000000000",
      "ethSentToCoinbase": "0",
      "value": "0x"
    }
  ],
  "stateBlockNumber": 18826351,
  "totalGasUsed": 42000
}
```