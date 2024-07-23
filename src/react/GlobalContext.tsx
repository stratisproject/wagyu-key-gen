import { Dispatch, SetStateAction, createContext, useState } from "react";

import { Network } from "./types";

interface GlobalContextType {
  network: Network;
  setNetwork: Dispatch<SetStateAction<Network>>;
}

export const GlobalContext = createContext<GlobalContextType>({
  network: Network.STRATIS,
  setNetwork: () => {},
});

/**
 * Global context for the network which is used across the application
 */
const GlobalContextWrapper = ({ children }: { children: React.ReactNode}) => {
  const [network, setNetwork] = useState<Network>(Network.STRATIS);

  return (
    <GlobalContext.Provider value={{ network, setNetwork }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextWrapper;
