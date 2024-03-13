export type LogLevel = 'debug' | 'info' | 'warning' | 'error';
export type LogDestination = 'console' | 'file' | 'network';

export interface LogOptions {
  timestamp?: Date;
  userId?: string;
}

export function log(message: string, level: LogLevel = 'info', destination: LogDestination = 'console', options?: LogOptions) {
  const { timestamp = new Date(), userId } = options || {};
  // Logic to format and send the log message to the appropriate destination
  console.log(`${timestamp.toISOString()} [${level.toUpperCase()}] ${message} (User: ${userId || 'N/A'})`);
}
