import HeaderNav from "../components/HeaderNav";
import MainNav from "../components/MainNav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import LoginAndRegister from "../components/LoginAndRegister";
import { useState } from "react";

export default function HomePage() {
  return (
    <>
      <header>
        <HeaderNav />
      </header>

      <nav>
        <MainNav />
      </nav>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>

      <LoginAndRegister />
    </>
  );
}
