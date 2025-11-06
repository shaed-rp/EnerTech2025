/**
 * Logger utility for consistent logging across the application
 * In production, logs can be sent to an error tracking service
 */

type LogLevel = "debug" | "info" | "warn" | "error";

class Logger {
  private isDevelopment = import.meta.env.DEV;
  private isProduction = import.meta.env.PROD;

  private log(level: LogLevel, message: string, data?: unknown) {
    // In development, always log to console
    if (this.isDevelopment) {
      const consoleMethod = level === "error" ? console.error : 
                           level === "warn" ? console.warn :
                           level === "info" ? console.info : 
                           console.log;
      
      consoleMethod(`[${level.toUpperCase()}]`, message, data || "");
    }

    // In production, you can send errors to a logging service
    if (this.isProduction && level === "error") {
      // Example: Send to error tracking service
      // errorTrackingService.captureException(new Error(message), { extra: data });
    }
  }

  debug(message: string, data?: unknown) {
    if (this.isDevelopment) {
      this.log("debug", message, data);
    }
  }

  info(message: string, data?: unknown) {
    this.log("info", message, data);
  }

  warn(message: string, data?: unknown) {
    this.log("warn", message, data);
  }

  error(message: string, error?: Error | unknown) {
    const errorData = error instanceof Error 
      ? { message: error.message, stack: error.stack, name: error.name }
      : error;
    
    this.log("error", message, errorData);
  }
}

export const logger = new Logger();

