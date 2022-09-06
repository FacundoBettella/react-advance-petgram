import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    // Algunos navegadores privado no permiten acceder al localStorage
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = localStorage.getItem(key);
        return item !== null ? JSON.parse(item) : initialValue;
      } catch (e) {
        return initialValue;
      }
    });

    const setLocalStorage = (value) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
      } catch (error) {
        console.log(error);
      }
    };

    return [storedValue, setLocalStorage];
  }
