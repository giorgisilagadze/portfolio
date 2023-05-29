import { Helmet } from "react-helmet";
import { GlobalStyled } from "./styled-components/Global.Styled";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Giorgi's portfolio</title>
      </Helmet>

      <GlobalStyled />
      <Router>
        <Header setMenu={setMenu} menu={menu} />
        <Routes>
          <Route path="/" element={<Home setMenu={setMenu} menu={menu} />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
