import React, { useState, useEffect } from 'react';

import { createContext } from 'react';
import api from '../services/api';

import AsyncStorage from '@react-native-community/async-storage';

interface User {
  token: string;
  refresh: string;
}

interface AuthContextData {
  signed: boolean;
  user: User;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  loading: boolean;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadStoragedData() {
      const storedUser = await AsyncStorage.getItem('@RNAuth:user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }

    loadStoragedData();

  }, [])

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('auth', { email, password })

      setUser({
        token: data.token,
        refresh: data.refreshToken
      });

      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify({
        token: data.token,
        refresh: data.refreshToken
      }))
    } catch (error) {

    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, signIn, user: { token: '', refresh: '' }, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
