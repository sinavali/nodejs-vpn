const openvpnmanager = require('node-openvpn');

const opts = {
  host: '127.0.0.1', // normally '127.0.0.1', will default to if undefined
  port: 1337, //port openvpn management console
  timeout: 150000, //timeout for connection - optional, will default to 1500ms if undefined
};
const auth = {
  user: 'vpnUserName',
  pass: 'vpnPassword',
};
const openvpn = openvpnmanager.connect(opts)

// will be emited on successful interfacing with openvpn instance
openvpn.on('connected', () => {
  openvpnmanager.authorize(auth);
});
