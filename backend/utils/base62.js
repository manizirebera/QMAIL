// Base62 Encoding Utility
// This utility provides functions for encoding and decoding strings using Base62.

const BASE62_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

/**
 * Encodes a number to a Base62 string.
 * @param {number} num - The number to encode.
 * @returns {string} - The Base62 encoded string.
 */
function encode(num) {
    let encoded = '';
    while (num > 0) {
        const remainder = num % 62;
        encoded = BASE62_CHARSET[remainder] + encoded;
        num = Math.floor(num / 62);
    }
    return encoded || BASE62_CHARSET[0]; // Return '0' if num is 0
}

/**
 * Decodes a Base62 encoded string to a number.
 * @param {string} str - The Base62 string to decode.
 * @returns {number} - The decoded number.
 */
function decode(str) {
    let decoded = 0;
    for (let char of str) {
        decoded = decoded * 62 + BASE62_CHARSET.indexOf(char);
    }
    return decoded;
}

module.exports = { encode, decode };