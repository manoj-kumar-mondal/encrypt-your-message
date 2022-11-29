export type Message = string | number;

export const covertToCipherText = (msg: Message, KEY: string): Message => {
    let str = "";
    if (typeof msg === 'number') {
        msg = msg.toString();
    }
    for (let i = 0; i < msg.length; i++) {
        let code = msg.charCodeAt(i) ^ KEY.charCodeAt(i);
        str += String.fromCharCode(code);
    }
    return Number(str) || str;
};

export const generateKey = (): string => {
    let str = "";
    for (let i = 0; i < 64; i++) {
        let code = Math.floor(Math.random() * (32 + (126 - 32)));
        str += String.fromCharCode(code);
    }
    return str;
};