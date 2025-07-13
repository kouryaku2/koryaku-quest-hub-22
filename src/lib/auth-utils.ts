import { z } from 'zod';

// Password validation schema
export const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters long')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character');

// Email validation schema
export const emailSchema = z.string()
  .email('Please enter a valid email address')
  .min(1, 'Email is required');

// Form validation schemas
export const signUpSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
});

// Type definitions
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;

// Generic error messages to prevent user enumeration
export const GENERIC_ERROR_MESSAGES = {
  AUTH_FAILED: 'Authentication failed. Please check your credentials and try again.',
  SIGNUP_FAILED: 'Account creation failed. Please try again later.',
  RATE_LIMITED: 'Too many attempts. Please wait a moment before trying again.',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  UNKNOWN_ERROR: 'An unexpected error occurred. Please try again later.',
} as const;

// Password strength indicator
export const getPasswordStrength = (password: string): {
  score: number;
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) score += 1;
  else feedback.push('At least 8 characters');

  if (/[a-z]/.test(password)) score += 1;
  else feedback.push('One lowercase letter');

  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push('One uppercase letter');

  if (/[0-9]/.test(password)) score += 1;
  else feedback.push('One number');

  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  else feedback.push('One special character');

  return { score, feedback };
};

// Rate limiting helper (client-side)
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts = 5;
  private readonly windowMs = 15 * 60 * 1000; // 15 minutes

  isRateLimited(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    this.attempts.set(identifier, recentAttempts);
    
    return recentAttempts.length >= this.maxAttempts;
  }

  recordAttempt(identifier: string): void {
    const attempts = this.attempts.get(identifier) || [];
    attempts.push(Date.now());
    this.attempts.set(identifier, attempts);
  }
}