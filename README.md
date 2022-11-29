# encrypt-your-message

JavaScript library to encrypt as well as decrypt message.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install encrypt-your-message
```

## Features

- Encrypt your message before saving into database or sending it through http request/response.
- Secure your message so that attackers don't get any clue.
- Decrypt the message with your custom key or managed by the module.
- Easy to use.

## Example

```js
import eym from "encrypt-your-message";

const enObj = eym(/* CUSTOM-KEY (not recomended) */);

const message = "This is a dummy message";

const encryptedMsg = enObj.encrypt(message);

const decryptedMsg = enObj.decrypt(encryptedMsg);
```
