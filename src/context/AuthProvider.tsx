import { createContext, useContext, useState } from 'react';

export interface IValue {
  user: string | null;
  singIn: (newUser: string | null, callBack: () => void) => void;
  singOut: (callBack: () => void) => void;
}

const AuthContext = createContext<IValue | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user'));

  const singIn = (newUser: string | null, callBack: () => void) => {
    setUser(newUser);
    callBack();
  };

  const singOut = (callBack: () => void) => {
    setUser(null);
    callBack();
  };

  const value: IValue = {
    user,
    singIn,
    singOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
