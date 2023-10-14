import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  return (
    <Context.Provider value={[orders, setOrders]}>{children}</Context.Provider>
  );
}

export function useOrdersContext() {
  return useContext(Context);
}
