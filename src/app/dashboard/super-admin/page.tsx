'use client';

import React from 'react';

export default function SuperAdminDashboard() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Super Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-700">Total Schools</h2>
          <p className="text-3xl font-bold text-blue-900 mt-2">0</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-green-700">Total Users</h2>
          <p className="text-3xl font-bold text-green-900 mt-2">0</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-purple-700">Active Sessions</h2>
          <p className="text-3xl font-bold text-purple-900 mt-2">0</p>
        </div>
      </div>
    </div>
  );
} 