# 元界钱包rpc调用库

## 如何获取
```
npm install --save mvs-rpc

```

## 如何使用

```js
const Mvs = require('mvs-client');

const client = new Mvs('http://localhost:8820/rpc');

client.height().then(val => console.log(val));

```

使用await
```js
const res = await client.callMethod('fetch-balance', ['MUiW2CViWLQBg2TQDsRt1Pcj7KyrdqFPj7']);
console.log(res)

```
