import { useState } from "react";

/**
 * Sync state to local storage to ensure that it survives a page refresh.
 * @param {String} key Key name of the stored data
 * @param {{id: Number, todo: String, category: String}} initialValue The initial value of the stored data
 * @returns {[{id: Number, todo: String, category: String}[], Function]}
 */
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") return initialValue;

        try {
            const item = window.localStorage.getItem(key); // get item from localStorage by key
            return item ? JSON.parse(item) : initialValue; // return value if exists; initial value otherwise
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== "undefined") window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // something went wrong and wasn't able to save the value
            console.log(error);
        }
    };
    return [storedValue, setValue];
}