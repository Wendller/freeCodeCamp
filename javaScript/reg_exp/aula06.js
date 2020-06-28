const { cpfs, ips } = require("./text");

const regExpCPF = /(\d{3}\.)+\d{3}\-\d{2}/g;

const regExpIp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g

console.log(cpfs.match(regExpCPF));

console.log(ips.match(regExpIp));

