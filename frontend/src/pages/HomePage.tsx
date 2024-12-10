import HeaderNav from "../components/HeaderNav";
import SearchBar from "../components/SearchBar";
import MainNav from "../components/MainNav";
import Main from "../components/Main";

export default function HomePage() {
  return (
    <>
      <header>
        <HeaderNav />
        <SearchBar />
      </header>

      <MainNav />
      <Main />
    </>
  );
}
