import { Button } from '@/presentation/components/Button';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export function AkameFlow() {
  return (
    <View className="flex flex-1 items-center justify-center bg-slate-950">
      <Link href="/">
        <Button label="Go back Home" variant="link" />
      </Link>
    </View>
  );
}
