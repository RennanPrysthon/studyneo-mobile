import React, {useState, useEffect} from 'react';

import {createContext} from 'react';
import Api from '~/api/session';
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
  googleSignIn(idToken: string): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storedUser = await AsyncStorage.getUser();
      console.log(storedUser);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const data = await Api.login(email, password);
      setUser({
        token: data.token.token,
        name: data.user.name,
      });
      await AsyncStorage.setUser(
        JSON.stringify({
          token: data.token.token,
          name: data.user.name,
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
  async function googleSignIn(idToken: string) {
    try {
      const data = await Api.googleSignIn(idToken);
      await AsyncStorage.setUser(
        JSON.stringify({
          token: data.token.token,
          name: data.user.name,
        }),
      );
    } catch (err) {
      await AsyncStorage.clear();
    }
  }
  return (
    <AuthContext.Provider
      value={{signed: !!user, signIn, user, signOut, loading, googleSignIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
