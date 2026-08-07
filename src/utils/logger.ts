type LogLevel = 'debug' | 'info' | 'warn' | 'error';
const weights: Record<LogLevel, number> = { debug: 10, info: 20, warn: 30, error: 40 };
const configured = (process.env.LOG_LEVEL ?? 'info') as LogLevel;
const threshold = weights[configured] ?? weights.info;

function write(level: LogLevel, message: string, context?: Record<string, unknown>): void {
  if (weights[level] < threshold) return;
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...(context && { context }),
  };
  const output = JSON.stringify(entry);
  if (level === 'error') console.error(output);
  else if (level === 'warn') console.warn(output);
  else console.log(output);
}

export const logger = {
  debug: (message: string, context?: Record<string, unknown>): void =>
    write('debug', message, context),
  info: (message: string, context?: Record<string, unknown>): void =>
    write('info', message, context),
  warn: (message: string, context?: Record<string, unknown>): void =>
    write('warn', message, context),
  error: (message: string, context?: Record<string, unknown>): void =>
    write('error', message, context),
};
