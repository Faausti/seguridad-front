import * as CryptoJS from "crypto-js";

const key = process.env.REACT_APP_PUBLIC_KEY;
const iv = process.env.REACT_APP_IV_KEY;

export const encryption = (value) => {
    const _key = CryptoJS.enc.Utf8.parse(key);
    const _iv = CryptoJS.enc.Utf8.parse(iv);
    return CryptoJS.AES.encrypt(value, _key, {
        iv: _iv,
        format: CryptoJS.format.Hex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    }).toString();
};

export const decryption = (value) => {
    const _key = CryptoJS.enc.Utf8.parse(key);
    const _iv = CryptoJS.enc.Utf8.parse(iv);
    return CryptoJS.AES.decrypt(value, _key, {
        iv: _iv,
        format: CryptoJS.format.Hex,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
};
