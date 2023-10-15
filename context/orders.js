import { createContext, useContext, useState } from 'react';

export const ordersCount = 0;
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
