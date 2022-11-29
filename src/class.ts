import { covertToCipherText, generateKey, Message } from "./helperFunction";

class EYM {
    /**
     * For setting custom screte key
     * @param SECREATE_KEY Custom KEY
     */

    constructor(private SECREATE_KEY?: string) {
        if (!SECREATE_KEY) {
            this.SECREATE_KEY = generateKey();
        } else {
            this.SECREATE_KEY = SECREATE_KEY;
        }
    };

    /**
     * This is the encryption function which encrypt the provided data 
     * @param msg data to be encryted
     * @returns the encryted data
     */
    encrypt(msg: Message): Message {
        if (!msg) {
            throw new Error("Message is required in encrypt method");
        }
        if (this.SECREATE_KEY) {
            return covertToCipherText(msg, this.SECREATE_KEY);
        }
        return "";
    }

    /**
     * This is the decryption function which decrypt thr encrypted data
     * @param msg encryted data
     * @returns original string
     */
    decrypt(msg: Message): Message {
        if (!msg) {
            throw new Error("Message is required in decrypt method");
        }
        if (this.SECREATE_KEY) {
            return covertToCipherText(msg, this.SECREATE_KEY);
        }
        return "";
    }
};

export default EYM;
