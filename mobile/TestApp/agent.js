// import https from 'https';
// import fs from 'fs';
// import path from 'path';

// // For more `https.Agent` options, see here:
// // https://nodejs.org/api/https.html#https_https_request_options_callback

// export default (agent = (name) => {
// 	const certFile = path.resolve(__dirname, `${name}_cert.pem`);
// 	const keyFile = path.resolve(__dirname, `${name}_key.pem`);
// 	return new https.Agent({
// 		cert: fs.readFileSync(certFile),
// 		key: fs.readFileSync(keyFile),
// 		rejectUnauthorized: false
// 	});
// });
