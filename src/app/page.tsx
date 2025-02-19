'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
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
          <div className="space-y-2">
            <p className="text-gray-600">Redirecting to login...</p>
            <p className="text-sm text-gray-500">
              If you are not redirected,{' '}
              <Link href="/login" className="text-blue-500 hover:underline">
                click here
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 