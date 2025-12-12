import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import CitiesPage from "./pages/CitiesPage";
import CityPage from "./pages/CityPage";
import ArticleViewer from "./components/ArticleViewer";
import CookiePage from "./pages/cookie-page";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
          <Route path="/country/:countryName/cities" element={<CitiesPage />} />
          <Route
            path="/country/:countryName/cities/:cityId"
            element={<CityPage />}
          />
          <Route
            path="/country/:countryName/cities/:cityId/articles/:articleId"
            element={<ArticleViewer />}
          />
          <Route path="/cookie-policy" element={<CookiePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
