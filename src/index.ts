import { Web3Resolver } from "./defaults/web3-default-resolver";

async function start() {
    console.log("Start!");
    const web3res = new Web3Resolver();
    try {
        const res = await web3res.resolve("rock.fiat");
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}
start()