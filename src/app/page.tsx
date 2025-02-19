'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const redirectToLogin = async () => {
      try {
        await router.push('/login');
      } catch (error) {
        console.error('Navigation error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    redirectToLogin();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">EduGenix</h1>
        {isLoading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : (
          <p className="text-gray-600">Redirecting to login...</p>
        )}
      </div>
    </div>
  );
} 