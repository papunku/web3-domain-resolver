import { NetworkConnection, NetworkName } from "../networks/connections/network-connection.types";

export const DEFAULT_RPC_URL: Record<NetworkName, string> = {
	bsc: "https://bsc-dataseed1.ninicoin.io",
	ethereum: "https://eth-mainnet.public.blastapi.io",
	polygon: "https://rpc-mainnet.matic.quiknode.pro",
	aurora: "https://mainnet.aurora.dev",
	cronos: "https://node.croswap.com/rpc",
	
	//TEST
	"polygon-mumbai": "https://rpc-mumbai.matic.today",
	hardhat: "http://127.0.0.1:8545/",
	zil: "",
};

//theese urls can only connect to Freename smart contract addresses
export const DEFAULT_INFURA_RPC_URL: Record<NetworkName, string> = {
	polygon: "https://polygon-mainnet.infura.io/v3/de21d7dc37334e459e15e172ee9d45f2",
	ethereum: "https://mainnet.infura.io/v3/de21d7dc37334e459e15e172ee9d45f2",
	aurora: "https://aurora-mainnet.infura.io/v3/de21d7dc37334e459e15e172ee9d45f2",
	"polygon-mumbai": "",
	bsc: "",
	zil: "",
	hardhat: "",
	cronos: ""
}

export class DefaultTools {
	static getDefaultConnection(networkName: NetworkName, options: { infuraIfAvailable?: boolean } = {}): NetworkConnection {
		const { infuraIfAvailable = false } = options
		let url: string | undefined;

		if (infuraIfAvailable) {
			url = DEFAULT_INFURA_RPC_URL[networkName];
		}

		if (!url) {
			url = DEFAULT_RPC_URL[networkName];
		}

		return {
			networkName: networkName,
			rpcUrl: url,
		};
	}
}