import CryptoJS from "crypto-js";

import { cryptographyIV, cryptographyKey } from "./constants";

const key = CryptoJS.enc.Base64.parse(cryptographyKey);
const iv = CryptoJS.enc.Base64.parse(cryptographyIV);

export const encryptPlainText = (plainText: string) => {
    return (CryptoJS.AES.encrypt(plainText, key, { iv: iv })).toString();
}

export const decryptCipherText = (cipherText: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, key, { iv: iv });
    const decryptedValue = bytes.toString(CryptoJS.enc.Utf8)
    return decryptedValue;
}