'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { AppwriteService } from '../../services/appwrite';
import { setUser, setError, setLoading } from '../../store/slices/authSlice';
import { User, UserRole } from '../../types/auth';

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (formData: { email: string; password: string }) => {
    try {
      dispatch(setLoading(true));
      const session = await AppwriteService.login(formData.email, formData.password);
      const userData = await AppwriteService.getCurrentUser();
      
      const user: User = {
        $id: userData.$id,
        email: userData.email,
        name: userData.name,
        role: userData.prefs?.role || UserRole.STUDENT,
      };

      dispatch(setUser(user));

      // Redirect based on role
      switch (user.role) {
        case UserRole.SUPER_ADMIN:
          router.push('/dashboard/super-admin');
          break;
        case UserRole.SCHOOL_ADMIN:
          router.push('/dashboard/school-admin');
          break;
        case UserRole.TEACHER:
          router.push('/dashboard/teacher');
          break;
        case UserRole.STUDENT:
          router.push('/dashboard/student');
          break;
        case UserRole.PARENT:
          router.push('/dashboard/parent');
          break;
        default:
          router.push('/dashboard');
      }
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
} 