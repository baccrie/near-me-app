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
import AboutHost from "./pages/AboutHost";
import AccountSettings from "./pages/AccountSettings";
import PersonalInfo from "./pages/PersonalInfo";
import AccountSettingsIndex from "./pages/AccountSettingsIndex";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/protectedRoute";
import { HostLocaleProvider } from "./context/hostLocaleContext";
import { useState } from "react";

function App() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <HomePage
                  setIsOpenLogin={setIsOpenLogin}
                  isOpenLogin={isOpenLogin}
                />
              }
            />

            <Route
              path="locale/:id"
              element={
                <ProtectedRoute setIsOpenLogin={setIsOpenLogin}>
                  <Locale />
                </ProtectedRoute>
              }
            />

            <Route
              path="host-your-locale"
              element={
                <ProtectedRoute setIsOpenLogin={setIsOpenLogin}>
                  <HostLocale />
                </ProtectedRoute>
              }
            >
              <Route index path="overview" element={<HostLocaleOverview />} />
              <Route path="about-your-locale" element={<AboutLocale />} />
              <Route path="structure" element={<Structure />} />
              <Route path="amenities" element={<HostLocaleAmenity />} />
              <Route path="photos" element={<HostLocalePhotos />} />
              <Route path="location" element={<LocaleLocation />} />
              <Route path="about-host" element={<AboutHost />} />
              <Route path="details" element={<LocaleDetails />} />
            </Route>

            <Route
              path="account-settings"
              element={
                <ProtectedRoute setIsOpenLogin={setIsOpenLogin}>
                  <AccountSettings />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <ProtectedRoute setIsOpenLogin={setIsOpenLogin}>
                    <AccountSettingsIndex />
                  </ProtectedRoute>
                }
              />
              <Route
                path="personal-info"
                element={
                  <ProtectedRoute setIsOpenLogin={setIsOpenLogin}>
                    <PersonalInfo />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
