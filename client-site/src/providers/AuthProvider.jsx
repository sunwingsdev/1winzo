import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isApiModalOpen, setIsApiModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const authInfo = {
    isApiModalOpen,
    setIsApiModalOpen,
    isModalOpen,
    setIsModalOpen,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
