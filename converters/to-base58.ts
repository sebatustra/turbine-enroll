import bs58 from 'bs58'
import promptSync from "prompt-sync"

const prompt = promptSync();

export function convertToBase58(wallet: Uint8Array): string {
    return bs58.encode(wallet).toString()
}

export function parseArrayString(str: string): Uint8Array {
    const numbers = str.replace(/[\[\]\s]/g, '').split(',').map(num => parseInt(num, 10));
    return new Uint8Array(numbers);
}

if (require.main === module) {
    const arrayString = prompt('Enter you wallet in byte array format: ');
    try {
        const uint8Array = parseArrayString(arrayString);
        console.log("In base58 format: ", convertToBase58(uint8Array))
    } catch(error) {
        console.error("Error parsing input: ", error);
    }
}