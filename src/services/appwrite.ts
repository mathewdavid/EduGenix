import { Client, Account, Databases } from 'appwrite';
import { UserRole } from '../types/auth';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(client);
export const databases = new Databases(client);

export const AppwriteService = {
  // Auth methods
  createAccount: async (email: string, password: string, name: string) => {
    try {
      const response = await account.create('unique()', email, password, name);
      return response;
    } catch (error) {
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    try {
      const response = await account.createEmailSession(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      return await account.get();
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      await account.deleteSession('current');
    } catch (error) {
      throw error;
    }
  },

  updateUserPrefs: async (userId: string, prefs: { role: UserRole }) => {
    try {
      const response = await account.updatePrefs(prefs);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default AppwriteService; 