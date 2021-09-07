import { useState, useEffect } from "react";

//Passes the key for the localStorage and the initial state
function getSavedValue(key, initialValue) {
  //Assigns savedValue to get localStorage
  const savedValue = JSON.parse(localStorage.getItem(key));
  //If in localStorage -> return
  if (savedValue) return savedValue;
  //If initial state is a function -> return that function
  if (initialValue instanceof Function) return initialValue();
  //Else just return the passed initial value
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  //Each time the value changes, add that value to localStorage
  useEffect(
    (key) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value]
  );

  return [value, setValue];
}
