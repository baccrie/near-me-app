import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Locale from "./pages/Locale";
import { useDropDown } from "./context/dropdownContext";
import { useEffect, useRef } from "react";

function App() {
  const app = useRef();
  const { toggleDropdown, isOpen } = useDropDown();

  useEffect(function () {
    const closeDropdown = function (e) {
      if (e.key === "Escape" && isOpen) toggleDropdown();
    };

    document.documentElement.addEventListener("keydown", closeDropdown);
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="locale/:id" element={<Locale />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
