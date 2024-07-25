import bs58 from 'bs58'
import promptSync from "prompt-sync"

const prompt = promptSync();

export function convertToArray(wallet: string): Uint8Array {
    return bs58.decode(wallet)
}

if (require.main === module) {
    const input = prompt("Enter your wallet in base58 format: ");
    try {
        const output = convertToArray(input).toString();
        console.log(`In byte array format: [${output}]`)
    } catch(error) {
        console.error("Error parsing input: ", error)
    }
}