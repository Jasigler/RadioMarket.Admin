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
   ADMIN_PASSWORD: "${process.env.ADMIN_PW}",
   CATEGORY_HEALTHROUTE: "${process.env.CATEGORY_HEALTHROUTE}",
   CATEGORY_API: "${process.env.CATEGORY_API}",
   ITEM_HEALTHROUTE: "${process.env.ITEM_HEALTHROUTE}",
   ITEM_API: "${process.env.ITEM_API}",
   IMAGE_HEALTHROUTE: "${process.env.IMAGE_HEALTHROUTE}",
   IMAGE_API: "${process.env.IMAGE_API}",
   USER_HEALTHROUTE: "${process.env.USER_HEALTHROUTE}",
   USER_API: "${process.env.USER_API}"

};
`;

writeFile(targetPath, environmentFileContent, error => {
  if (error) {
    console.log(error);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
