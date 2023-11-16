import algosdk from "algosdk";

const config = {
    algodToken: "",
    // algodToken: "ROs0KPlr9G71RxDhah1D2qp0sjiJQnV2NGGFOAUf",
    algodServer: "https://node.testnet.algoexplorerapi.io",
    // algodServer: "https://testnet-algorand.api.purestake.io/ps2",
    // indexerToken: "",
    indexerToken: "ROs0KPlr9G71RxDhah1D2qp0sjiJQnV2NGGFOAUf",
    // indexerServer: "https://algoindexer.testnet.algoexplorerapi.io",
    indexerServer: "https://testnet-algorand.api.purestake.io/idx2",
    // indexerServer: "https://node.testnet.algoexplorerapi.io",
    indexerPort: "",
}

// ALGOD_TOKEN = ""
// ALGOD_SERVER = "https://testnet-algorand.api.purestake.io/ps2"
// ALGOD_PORT = ""

// HEADERS = {
//     "X-API-Key": "ROs0KPlr9G71RxDhah1D2qp0sjiJQnV2NGGFOAUf",
// }

// algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS, HEADERS)
// algod_client = algod.LoggingAlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS, HEADERS)

export const algodClient = new algosdk.Algodv2(config.algodToken, config.algodServer, config.algodPort)

export const indexerClient = new algosdk.Indexer(config.indexerToken, config.indexerServer, config.indexerPort);

// export const AlgoSigner = window.AlgoSigner

export const crowdfundingAppNote = "algo-crowdfund"
export const initialAppId = 12;
export const MIN_ACCOUNT_BALANCE = 100_000

export const numLocalInts = 1;
export const numLocalBytes = 0;
// Maximum global storage allocation, immutable
export const numGlobalInts = 5; 
export const numGlobalBytes = 12; 

export const sponsoredProjectFee = 50_000;
// export const platformAddr = "UOFKRF6BIGRBYW2TUKKUBC24PWOA6GNM62ZIA77IBBT5RMYRPR3W25XPPQ";
export const platformAddr = "BC22SLAAFFLTP6LFPXRL3XM7CEB2U7TWH4FFWSXOUEQFW7F3JTZ4U2ZVM4";

export const ALGORAND_DECIMALS = 6;
export const amountInvestedKey = "QUNDT1VOVF9JTlZFU1RNRU5U"
export const currentAmountKey = "Q1VSUkVOVF9BTU9VTlQ="

export const donateArg = new TextEncoder().encode("donate")
export const refundArg = new TextEncoder().encode("refund")
export const claimArg = new TextEncoder().encode("claim")