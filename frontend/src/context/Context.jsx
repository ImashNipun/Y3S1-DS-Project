import { createContext, useReducer, useEffect } from "react";

const cartDataLocal = JSON.parse(localStorage.getItem('cart')) || [];

export const Cartcontext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const addstate = state.filter((item) => action.payload.id === item.id);
        if (addstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        const incstate = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return incstate;
      case "DECREASE":
        const decstate = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return decstate;
      case "REMOVE":
        const removestate = state.filter(
          (item) => item.id !== action.payload.id
        );

        return removestate;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, cartDataLocal);
  const info = { state, dispatch };

  useEffect(()=>{

    localStorage.setItem("cart", JSON.stringify(state))

  },[state]);
  return (
    <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
  );
};