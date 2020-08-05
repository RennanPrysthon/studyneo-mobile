import React, { useState, useEffect } from 'react';

import { createContext } from 'react';
import { login } from '~/api/session';
import AsyncStorage from '~/services/storage/auth';

interface User {
  token: string;
  name: string | null;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
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
      const storedUser = await AsyncStorage.getUser();
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const data = await login(email, password);
      setUser({
        token: data.token.token,
        name: data.user.name,
      });
      await AsyncStorage.setUser(
        JSON.stringify({
          token: data.token.token,
          user: data.user.name,
        }),
      );
    } catch (error) {
      await AsyncStorage.clear();
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, signIn, user, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
