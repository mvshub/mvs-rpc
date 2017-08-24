const Mvs = require('../index');

const client = new Mvs('http://localhost:8820/rpc');

client.height().then(val => console.log(val));

const test_tx  = async() => {
  const tx = await client.tx('76a7a4013ba2edf33eebdd3c087d28376fe3a12ede8c7eaffaf755824edf9861');
  console.log(tx);
}

test_tx();

client.callMethod('fetch-balance', ['MUiW2CViWLQBg2TQDsRt1Pcj7KyrdqFPj7']).then(res => console.log(res));