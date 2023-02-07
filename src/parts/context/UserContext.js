import React from 'react';
import useLocalStorage from '../customHooks/useLocalStorage';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [gamesInCart, setGamesInCart] = useLocalStorage(
    'gamesInCart',
    JSON.stringify([]),
  );
  const [gamesInLibrary, setGamesInLibrary] = useLocalStorage(
    'gamesInLibrary',
    JSON.stringify([]),
  );
  const [total, setTotal] = useLocalStorage('total', JSON.stringify('00.00'));

  return (
    <UserContext.Provider
      value={{
        gamesInCart,
        setGamesInCart,
        gamesInLibrary,
        setGamesInLibrary,
        total,
        setTotal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
