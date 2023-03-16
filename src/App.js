import Header from "./components/Header";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";
import Loader from "./pages/Loader";

import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <BrowserRouter>
            <Header />
            <Search />
            <Category />
            <Pages />
            <Footer />
          </BrowserRouter>
        </>
      )}
    </div>
  );
};

export default App;
