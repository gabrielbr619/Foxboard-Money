import { createContext, ReactElement, useState } from "react";

interface AuthContextData {
  signed: boolean;
  Login(email: string, password: string): IUser | null;
}

interface IUser {
  email: string;
  password: string;
  logged: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export { AuthContext };

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [signed, setSigned] = useState(false);
  function Login(email: string, password: string): IUser | null {
    if (email === "teste123@teste.com" && password === "teste123") {
      setUser({
        email,
        password,
        logged: true,
      });
      setSigned(true);
      localStorage.setItem("user", JSON.stringify(true));
    } else {
      setSigned(false);
      localStorage.setItem("user", JSON.stringify(false));
    }

    return user;
  }

  return (
    <AuthContext.Provider value={{ signed, Login }}>
      {children}
    </AuthContext.Provider>
  );
};
