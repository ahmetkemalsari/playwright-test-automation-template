import type { APIRequestContext, APIResponse } from '@playwright/test';

type JsonBody = Record<string, unknown>;

export class BaseApiClient {
  constructor(
    protected readonly request: APIRequestContext,
    private readonly defaultHeaders: Record<string, string> = {},
  ) {}

  protected async get(path: string): Promise<APIResponse> {
    return this.request.get(path, { headers: this.defaultHeaders });
  }

  protected async post(path: string, data: JsonBody): Promise<APIResponse> {
    return this.request.post(path, { data, headers: this.defaultHeaders });
  }
}
