export type UserRole = 'USER' | 'ADMIN';

export interface CreateUserRequest {
  name: string;
  email: string;
  role: UserRole;
}

export interface UserResponse extends CreateUserRequest {
  id: string;
  createdAt?: string;
}

export interface ExistingUser {
  id: number;
  name: string;
  email: string;
}
