import React from 'react';
import { AppRoutes } from '@/routes';
import { LanguageProvider } from '@/context/LanguageContext';

/**
 * Root Application Component
 */
export function App() {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  );
}

export default App;
