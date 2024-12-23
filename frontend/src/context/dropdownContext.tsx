// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useContext, useReducer } from "react";

// const Context = createContext(null);

// const initialState = {
//   isOpen: false,
// };

// function reducer(state: { isOpen: any }, action: { type: any }) {
//   const { isOpen } = state;
//   const { type, payload } = action;

//   switch (type) {
//     case "toggle":
//       return { ...state, isOpen: payload };

//     default:
//       return { ...state };
//   }
// }

// function CtaDropdownProvider({ children }) {
//   const [{ isOpen }, dispatch] = useReducer(reducer, initialState);

//   function openCta() {
//     dispatch({ type: "toggle", payload: true });
//   }

//   function closeCta() {
//     dispatch({ type: "toggle", payload: false });
//   }

//   return (
//     <Context.Provider
//       value={{
//         isOpen,
//         openCta,
//         closeCta,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// }

// function useCtaDropdown() {
//   const context = useContext(Context);
//   if (!context)
//     throw new Error("cant access dropdown context outside of scope");

//   return context;
// }

// export { useCtaDropdown, CtaDropdownProvider };
