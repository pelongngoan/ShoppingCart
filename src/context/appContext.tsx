import React from "react";
import { createContext, useState } from "react";

interface IAppContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const AppContext = createContext<IAppContext>({
  loading: false,
  setLoading: () => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => React.useContext(AppContext);
