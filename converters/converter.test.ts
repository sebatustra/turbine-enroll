import { convertToBase58, parseArrayString } from './to-base58';
import { convertToArray } from './from-base58';


const testArray = [34,46,55,124,141,190,24,204,134,91,70,184,161,181,44,122,15,172,63,62,153,150,99,255,202,89,105,77,41,89,253,130,27,195,134,14,66,75,242,7,132,234,160,203,109,195,116,251,144,44,28,56,231,114,50,131,185,168,138,61,35,98,78,53];
const testBase58 = "gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt";

test("converts to base58", () => {
    const uint8ArrayString = testArray.toString()
    const uint8Array = parseArrayString(uint8ArrayString);
    const result = convertToBase58(uint8Array);
    expect(result).toBe(testBase58);
})

test("converts from base58", () => {
    const result = convertToArray(testBase58);
    expect(Array.from(result)).toEqual(testArray);
})