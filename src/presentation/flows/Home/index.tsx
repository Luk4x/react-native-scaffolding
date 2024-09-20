import { Button } from '@/presentation/components/Button';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export function HomeFlow() {
  return (
    <View className="flex flex-1 gap-4 items-center justify-center bg-slate-950">
      <Link href="/akame">
        <Button label="Go to /akame" variant="link" />
      </Link>
      <Link href="/_sitemap">
        <Button label="Go to /_sitemap" variant="link" />
      </Link>
    </View>
  );
}
