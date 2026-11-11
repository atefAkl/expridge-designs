import React from 'react';
import { Container, Button } from '@/components/common';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Container className="text-center space-y-6">
        <span className="text-7xl font-extrabold text-[#0f2d4a]">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          {t('notFound.title')}
        </h1>
        <p className="text-slate-600 max-w-md mx-auto">
          {t('notFound.description')}
        </p>
        <div>
          <Link to="/">
            <Button variant="primary" icon={Home}>
              {t('notFound.backHome')}
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NotFoundPage;
