import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage, NotFoundPage } from '@/pages';

function HashScrollHandler() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash || hash === '#') return;
    const id = hash.slice(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return null;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <HashScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Wildcard 404 handler */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
