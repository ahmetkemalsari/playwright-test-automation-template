import type { APIResponse } from '@playwright/test';
import { BaseApiClient } from '../../../../api/clients/BaseApiClient';
import type { CreateUserRequest, ExistingUser, UserResponse } from '../models/user.model';

export class UserApi extends BaseApiClient {
  async createUser(payload: CreateUserRequest): Promise<APIResponse> {
    return this.post('/users', { ...payload });
  }

  async getUser(id: number): Promise<APIResponse> {
    return this.get(`/users/${id}`);
  }

  async parseCreatedUser(response: APIResponse): Promise<UserResponse> {
    return response.json() as Promise<UserResponse>;
  }

  async parseExistingUser(response: APIResponse): Promise<ExistingUser> {
    return response.json() as Promise<ExistingUser>;
  }
}
