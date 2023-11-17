const dns = require('dns');

const domainName = 'www.miu.edu';

dns.resolve4(domainName, (err, addresses) => {
  if (err) {
    console.error(`Error resolving ${domainName}: ${err.message}`);
  } else {
    console.log(`IP address of ${domainName}:`);
    addresses.forEach((address) => {
      console.log(`\t  ${address}`);
    });
  }
});