const { writeFile } = require('fs');
const { argv } = require('yargs');
require('dotenv').config();

const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   ADMIN_USER: "${process.env.ADMIN_USER}",
   ADMIN_PASSWORD: "${process.env.ADMIN_PW}"
   DOMAIN: "${process.env.DOMAIN}",
   CLIENT_ID: "${process.env.CLIENT_ID}",
   CLIENT_SECRET: "${process.env.CLIENT_SECRET}"
};
`;

writeFile(targetPath, environmentFileContent, error => {
  if (error) {
    console.log(error);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
