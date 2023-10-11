import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const setLocalStorageItem = (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
  };

  const getLocalStorageItem = (): T => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
  };

  const removeLocalStorageItem = () => {
      localStorage.removeItem(key);  
  };

  const [storedValue, setStoredValue] = useState(getLocalStorageItem);

  const updateLocalStorageValue = (value: T) => {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
  };

  return { value: storedValue, setValue: updateLocalStorageValue, removeValue: removeLocalStorageItem };
}

export default useLocalStorage;
