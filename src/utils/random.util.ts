let sequence = 0;

export function uniqueEmail(prefix = 'user'): string {
  sequence += 1;
  return `${prefix}-${Date.now()}-${sequence}@example.com`;
}
