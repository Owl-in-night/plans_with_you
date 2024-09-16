import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//Main Pages
import Home from "../../pages/Home";
import Gallery from "@/pages/Gallery";
import Documents from "@/pages/documents";
import Error from "../_partials/Error";

//Scrolltop
import ScrollToTop from "../_partials/ScrollToTop";

function Navigation() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Marcar como terminado el proceso de carga
  }, [location.pathname]);

  if (loading) return null; // Mostrar un estado de carga o null mientras se procesa el idioma

  return (
    <div className="Navigation">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PlansWithYou/Gallery" element={<Gallery />} />
        <Route path="/PlansWithYou/Acknowledgment" element={<Documents />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Navigation;
