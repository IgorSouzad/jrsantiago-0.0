import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ArtigosPublicaes from "./pages/ArtigosPublicaes";
import Menu from "./pages/Menu";
import Entrevistas from "./pages/Entrevistas";
import Sobre from "./pages/Sobre";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/artigos-publicaes":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/entrevistas":
        title = "";
        metaDescription = "";
        break;
      case "/sobre":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/artigos-publicaes" element={<ArtigosPublicaes />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/entrevistas" element={<Entrevistas />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}
export default App;
