import React from 'react';

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    const LocalItems = window.localStorage.getItem(key);

    return LocalItems ? LocalItems : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
