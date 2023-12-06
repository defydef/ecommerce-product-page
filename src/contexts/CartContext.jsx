import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const initialState = {
    qty: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "qty/add":
        return {
          ...state,
          qty: state.qty + 1,
        };

      default:
        throw new Error("Undefined action");
    }
  }

  function addCartQty() {
    dispatch({ type: "qty/add" });
  }

  const [{ qty }, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider
      value={{
        qty,
        dispatch,
        addCartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("useCart is undefined ");
  return context;
}

export { CartProvider, useCart };
