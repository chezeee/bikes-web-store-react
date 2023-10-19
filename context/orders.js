import { createContext, useState } from 'react';

export const ordersCount = 0;
export const Context = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  return (
    <Context.Provider value={[orders, setOrders]}>{children}</Context.Provider>
  );
}
