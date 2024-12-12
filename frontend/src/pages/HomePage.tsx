import HeaderNav from "../components/HeaderNav";
import SearchBar from "../components/SearchBar";
import MainNav from "../components/MainNav";
import Main from "../components/Main";
import Footer from "../components/Footer";

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
    </>
  );
}
