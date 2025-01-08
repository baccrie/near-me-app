import HeaderNav from "../components/HeaderNav";
import MainNav from "../components/MainNav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import LoginOrProfile from "../components/LoginAndRegister";
import { useState } from "react";

export default function HomePage({ isOpenLogin, setIsOpenLogin }) {
  // const [isOpenLogin, setIsOpenLogin] = useState(false);

  return (
    <>
      <header>
        <HeaderNav
          isOpenLogin={isOpenLogin}
          setIsOpenLogin={setIsOpenLogin}
          type={undefined}
        />
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

      <LoginOrProfile
        isOpenLogin={isOpenLogin}
        setIsOpenLogin={setIsOpenLogin}
      />
    </>
  );
}
