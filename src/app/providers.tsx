'use client';
import { store } from '@/redux/store';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </Provider>
  );
}
