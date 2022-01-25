const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// https://dashboard.flutterwave.com/dashboard/settings/apis
// https://blog.idrisolubisi.com/how-to-build-a-wallet-system-with-flutterwave-payment-integration-into-nodejs-application
