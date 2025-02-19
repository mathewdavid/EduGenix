'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">EduGenix</h1>
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    </div>
  );
} 