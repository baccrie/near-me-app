import HeaderNav from "../components/HeaderNav";
import MainNav from "../components/MainNav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import LoginAndRegister from "../components/LoginAndRegister";
import { useRef, useState } from "react";

export default function HomePage() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  return (
    <>
      <header>
        <HeaderNav isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin} />
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

      <LoginAndRegister
        isOpenLogin={isOpenLogin}
        setIsOpenLogin={setIsOpenLogin}
      />
    </>
  );
}
