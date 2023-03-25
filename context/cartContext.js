import React, { useState, useEffect } from "react";

const cartContext = React.createContext({});

export function CartsContextProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      const storedValue = localStorage.getItem("data");
      if (storedValue !== null) {
        setCart(JSON.parse(storedValue));
      }
      setInitialized(true);
    } else {
      localStorage.setItem("data", JSON.stringify(cart));
    }
  }, [cart, initialized]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;
