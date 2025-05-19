import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isApiModalOpen, setIsApiModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLRVModalOpen, setIsLRVModalOpen] = useState(false);
  const [isModalDWOpen, setIsModalDWOpen] = useState(false);

  const authInfo = {
    isApiModalOpen,
    setIsApiModalOpen,
    isModalOpen,
    setIsModalOpen,
    isRegistrationModalOpen,
    setIsRegistrationModalOpen,
    isLRVModalOpen,
    setIsLRVModalOpen,
    isModalDWOpen,
    setIsModalDWOpen,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
