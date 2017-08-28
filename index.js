const rpc = require('./lib/rpc');

class MvsRpc {
    constructor(url) {
        this.url = url;
        this.rpc = rpc(url);
    }

    heightHeader(num) {
        return this.callMethod('fetch-header', ['-t', num]).then(res => res.result);
    }

    hashHeader(hash) {
        return this.callMethod('fetch-header', ['--hash', hash]).then(res => res.result);
    }
    
    seed() {
        return this.callMethod('seed');
    }

    // 地址余额
    balance(address) {
        return this.callMethod('fetch-balance', [address]).then(res => res.balance);
    }

    // 最新块高
    height() {
        return this.callMethod('fetch-height');
    }

    // 地址交易历史
    history(address) {
        return this.callMethod('fetch-history', [address]).then(res => res.transfers);
    }

    tx(hash) {
        return this.callMethod('fetch-tx', [hash]).then(res => res.transaction);
    }

    txIndex(hash) {
        return this.callMethod('fetch-tx-index', [hash]);
    }

    utxo(satoshi, address) {
        return this.rpc('fetch-utxo', [satoshi, address]);
    }

    block(hash) {
        return this.callMethod('getblock', [hash, true]);
    }

    transaction(hash) {
        return this.callMethod('gettransaction', [hash]);
    }

    addressAsset(hash) {
        return this.callMethod('getaddressasset', [hash]).then(res => res.assets);
    }

    listassets() {
        return this.callMethod('listassets').then(res => res.assets);
    }

    callMethod(name, args) {
        return this.rpc(name, args).then(res => {
            if (res.error) {
                throw new Error(res.error);
            } 
            return res;
        });
    }
}

module.exports = MvsRpc;

