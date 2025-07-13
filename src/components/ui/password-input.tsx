import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPasswordStrength } from '@/lib/auth-utils';
import { cn } from '@/lib/utils';

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  showStrength?: boolean;
  required?: boolean;
  error?: string;
}

export const PasswordInput = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  showStrength = false,
  required = false,
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { score, feedback } = getPasswordStrength(value);

  const getStrengthColor = (score: number) => {
    if (score <= 1) return 'bg-red-500';
    if (score <= 2) return 'bg-orange-500';
    if (score <= 3) return 'bg-yellow-500';
    if (score <= 4) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getStrengthText = (score: number) => {
    if (score <= 1) return 'Very Weak';
    if (score <= 2) return 'Weak';
    if (score <= 3) return 'Fair';
    if (score <= 4) return 'Good';
    return 'Strong';
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={cn(
            'pr-10',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
          )}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      
      {showStrength && value && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Password strength</span>
            <span className={cn(
              'font-medium',
              score <= 2 ? 'text-red-500' : score <= 4 ? 'text-yellow-500' : 'text-green-500'
            )}>
              {getStrengthText(score)}
            </span>
          </div>
          <Progress 
            value={(score / 5) * 100} 
            className="h-1"
          />
          {feedback.length > 0 && (
            <div className="text-xs text-muted-foreground">
              Missing: {feedback.join(', ')}
            </div>
          )}
        </div>
      )}
    </div>
  );
};