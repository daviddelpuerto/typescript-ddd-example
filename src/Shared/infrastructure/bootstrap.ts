import dotenv from 'dotenv';
import '../../../config/app/dependency-injection';

function loadEnvConfig() {
  const envConfig = dotenv.config();
  if (envConfig.error) {
    process.stderr.write('⚠️  Couldn\'t find .env file  ⚠️\n');
    process.stderr.write(`${envConfig.error}\n`);
    process.exit(1);
  }
}

loadEnvConfig();
