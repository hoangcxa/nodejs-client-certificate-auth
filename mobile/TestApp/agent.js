import https from 'https-browserify';
// import fs from 'fs';
// import path from 'path';
import RNFS from 'react-native-fs';
//
// // // For more `https.Agent` options, see here:
// // // https://nodejs.org/api/https.html#https_https_request_options_callback
//
module.exports = function (name) {
    const certFile = RNFS.DocumentDirectoryPath+'/alice_cert.pem';
    const keyFile = RNFS.DocumentDirectoryPath+'/alice_key.pem';
    // console.log('RNFS.MainBundlePath',RNFS.MainBundlePath+'./');
    return new https.Agent({
        cert: RNFS.readFile(certFile),
        key: RNFS.readFile(keyFile),
        rejectUnauthorized: false
    });
};

