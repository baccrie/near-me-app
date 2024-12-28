import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Locale from "./pages/Locale";
import HostLocale from "./pages/HostLocale";
import HostLocaleOverview from "./pages/HostLocaleOverview";
import AboutLocale from "./pages/AboutLocale";
import Structure from "./pages/Structure";
import LocaleLocation from "./pages/LocaleLocation";
import HostLocaleAmenity from "./pages/HostLocaleAmenity";
import HostLocalePhotos from "./pages/HostLocalePhotos";
import LocaleDetails from "./pages/LocaleDetails";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="locale/:id" element={<Locale />} />
          <Route path="host-your-locale" element={<HostLocale />}>
            <Route path="overview" element={<HostLocaleOverview />} />
            <Route path="about-your-locale" element={<AboutLocale />} />
            <Route path="structure" element={<Structure />} />
            <Route path="amenities" element={<HostLocaleAmenity />} />
            <Route path="photos" element={<HostLocalePhotos />} />
            <Route path="location" element={<LocaleLocation />} />
            <Route path="details" element={<LocaleDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
