import { cn } from '@/utils';
import { Text, TouchableOpacity } from 'react-native';

import { buttonTextVariants, buttonVariants } from './styles';
import type { ButtonProps } from './types';

function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: labelClasses })
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export { Button, buttonTextVariants, buttonVariants, type ButtonProps };
