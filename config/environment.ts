import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import dotenv from 'dotenv';

export type TestEnvironment = 'dev' | 'staging' | 'prod';
export interface EnvironmentConfig {
  environment: TestEnvironment;
  baseUrl: string;
  apiBaseUrl: string;
  username: string;
  password: string;
  isProduction: boolean;
  testIdAttribute: string;
}

const environment = (process.env.TEST_ENV ?? 'dev') as TestEnvironment;
if (!['dev', 'staging', 'prod'].includes(environment)) {
  throw new Error(`Invalid TEST_ENV "${environment}". Expected dev, staging, or prod.`);
}

const candidates = [resolve(`config/environments/${environment}.env`), resolve('.env')];
for (const path of candidates)
  if (existsSync(path)) dotenv.config({ path, override: false, quiet: true });

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

if (
  environment === 'prod' &&
  (process.env.ALLOW_PROD_TESTS !== 'true' ||
    process.env.PROD_CONFIRMATION !== 'RUN_NON_DESTRUCTIVE')
) {
  throw new Error(
    'Production execution is blocked. Explicitly set ALLOW_PROD_TESTS=true and PROD_CONFIRMATION=RUN_NON_DESTRUCTIVE.',
  );
}

export const env: EnvironmentConfig = Object.freeze({
  environment,
  baseUrl: required('BASE_URL'),
  apiBaseUrl: required('API_BASE_URL'),
  username: required('TEST_USERNAME'),
  password: required('TEST_PASSWORD'),
  isProduction: environment === 'prod',
  testIdAttribute: process.env.TEST_ID_ATTRIBUTE?.trim() ?? 'data-testid',
});
