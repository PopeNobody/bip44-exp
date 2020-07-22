console.log("Hello, world!");

var HDKey = require('hdkey')
//var seed = 'a0c42a9c3ac6abf2ba6a9946ae83af18f51bf1c9fa7dacc4c92513cc4dd015834341c775dcd4c0fac73547c5662d81a9e9361a0aac604a73a321bd9103bce8af'
var seed = '408b285c123836004f4b8842c89324c1f01382450c0d439af345ba7fc49acf705489c6fc77dbd4e3dc1dd8cc6bc9f043db8ada1e243c4a0eafb290d399480840';
var hdkey = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'))
console.log(hdkey.privateExtendedKey)
var child = hdkey.derive("m/44'/0'/0'/0/0");
console.log(child.privateExtendedKey);
console.log(child.publicExtendedKey);
console.log(child.privateKey.toString('hex'));

var CoinKey = require('coinkey');
ck = new CoinKey(child.privateKey);
console.log(ck.publicAddress);
// => 'xprv9s21ZrQH143K2SKJK9EYRW3Vsg8tWVHRS54hAJasj1eGsQXeWDHLeuu5hpLHRbeKedDJM4Wj9wHHMmuhPF8dQ3bzyup6R7qmMQ1i1FtzNEW'
// console.log(hdkey.publicExtendedKey)

