import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
    
    const saveLocalStorageItem = (value: T) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error saving data to localStorage: ${error}`);
        }
    };

    const getLocalStorageItem = (): T => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error loading data from localStorage: ${error}`);
            return initialValue;
        }
    };

    const removeLocalStorageItem = () => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing data from localStorage: ${error}`);
        }
    };

    const [storedValue, setStoredValue] = useState(getLocalStorageItem);

    const updateLocalStorageValue = (value: T) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error saving data to localStorage: ${error}`);
        }
    };

    return { value: storedValue, setValue: updateLocalStorageValue, removeValue: removeLocalStorageItem };
}

export default useLocalStorage;
