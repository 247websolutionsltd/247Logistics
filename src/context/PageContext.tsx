import {
  createContext,
  useContext,
  useState,
  type ReactNode
} from 'react';

type LogInForm = {
  email: string;
  password: string;
};

type RegisterForm = {
  email: string;
  password: string;
  confirm: string;
  name: string;
  phone: string;
  interest: string;
};

type AuthContextType = {
  loading: boolean;
  logInForm: LogInForm;
  updateLogInField: (field: "email" | "password", value: string)=>void;
  registerForm: RegisterForm;
  updateRegisterField: (field: "email" | "password" | "confirm" | "name" | "phone" | "interest", value: string)=>void;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });
  const updateLogInField = (
    field: keyof typeof logInForm,
    value: string
  ) => {
    setLogInForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirm: "",
    name: "",
    phone: "",
    interest: "",
  });
  
  const updateRegisterField = (
    field: keyof typeof registerForm,
    value: string
  ) => {
    setRegisterForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  return (
    <AuthContext.Provider
      value={{
        loading,
        logInForm,
        updateLogInField,
        registerForm,
        updateRegisterField
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside an AuthProvider'
    );
  }

  return context;
}