import { uniqueEmail } from '../../../../utils/random.util';
import type { CreateUserRequest } from '../../api/models/user.model';

export class UserFactory {
  static create(overrides: Partial<CreateUserRequest> = {}): CreateUserRequest {
    return {
      name: 'Test User',
      email: uniqueEmail('test-user'),
      role: 'USER',
      ...overrides,
    };
  }
}
