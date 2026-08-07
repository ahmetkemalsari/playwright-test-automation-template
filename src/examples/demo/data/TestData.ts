import { env } from '../../../../config/environment';

export const testUser = Object.freeze({ email: env.username, password: env.password });
export const invalidUser = Object.freeze({ email: 'invalid-user', password: 'invalid-password' });
