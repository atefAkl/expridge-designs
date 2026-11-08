import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from '@/pages';

export function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Wildcard 404 handler */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
