import { BigNumber, providers, Transaction, Wallet } from 'ethers';
import { FlashbotsBundleProvider } from "@flashbots/ethers-provider-bundle";

require('dotenv').config()

// Standard json rpc provider directly from ethers.js (NOT Flashbots)
const provider = new providers.WebSocketProvider(process.env.BLOCKCHAIN_ETH_RPC, 1)

const user1 = new Wallet(process.env.USER1_PK)
console.log({ user1 })
const user2 = new Wallet(process.env.USER2_PK)
console.log({ user2 })

async function run() {
    const user1Tx = {
        type: 0,
        chainId: 1,
        from: user1.address,
        to: user2.address,
        value: BigNumber.from(String(1e16)),
        gasPrice: await provider.getGasPrice(),
        gasLimit: 21000,
        nonce: await provider.getTransactionCount(user1.address, 'pending')
    }

    const tx1Signed = await user1.signTransaction(user1Tx)
    console.log({ tx1Signed })

    const feeData = await provider.getFeeData()

    const user2Tx = {
        chainId: 1,
        type: 2,
        from: user2.address,
        to: user1.address,
        value: BigNumber.from(String(1e16)),
        maxPriorityFeePerGas: BigNumber.from(feeData.maxPriorityFeePerGas).mul(120).div(100),
        maxFeePerGas: feeData.maxFeePerGas,
        gasLimit: 21000,
        nonce: await provider.getTransactionCount(user2.address, 'pending')
    } as unknown as Transaction

    const tx2Signed = await user2.signTransaction(user2Tx)
    console.log({ tx2Signed })

// Flashbots provider requires passing in a standard provider
    const flashbotsProvider = await FlashbotsBundleProvider.create(
        provider, // a normal ethers.js provider, to perform gas estimiations and nonce lookups
        user2 // ethers.js signer wallet, only for signing request payloads, not transactions
    )

    const transactionBundle = [
        {
            signedTransaction: tx1Signed // serialized signed transaction hex
        },
        {
            signer: user2, // ethers signer
            transaction: user2Tx // ethers populated transaction object
        }
    ]

    const targetBlockNumber = (await provider.getBlockNumber()) + 1

    const signedTransactions = await flashbotsProvider.signBundle(transactionBundle)

    console.log({ signedTransactions, targetBlockNumber })

    const simulation = await flashbotsProvider.simulate(signedTransactions, targetBlockNumber)
    console.log(JSON.stringify(simulation, null, 2))

    process.exit()
}

run();
