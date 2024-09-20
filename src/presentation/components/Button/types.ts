import type { VariantProps } from 'class-variance-authority';
import { TouchableOpacity } from 'react-native';

import { buttonVariants } from './styles';

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string;
  labelClasses?: string;
}
