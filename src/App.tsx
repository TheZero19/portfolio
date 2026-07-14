import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "styled-components";
import MainPage from "./Pages/MainPage";
import ContactPage from "./Pages/ContactPage";
import SelfSummary from "./Components/SelfSummary";
import AboutMe from "./Pages/AboutMe";
import { Column } from "./Styles/StyledComponents";
import Footer from "./Components/Footer";

const AppContainer = styled(Column)`
  position: relative;
  min-height: 90vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 24px 64px;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 20px 14px 48px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  margin: 0 auto 6px;
  background: rgba(6, 14, 24, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(16px);
  border-radius: 999px;
  width: fit-content;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    border-radius: 24px;
    padding: 8px;
  }
`;

const NavbarLink = styled(Link)`
  font-size: 0.98rem;
  text-decoration: none;
  color: #eaf4ff;
  font-weight: 700;
  padding: 10px 16px;
  border-radius: 999px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: #ffffff;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 768px) {
    font-size: 0.92rem;
    padding: 8px 12px;
  }
`;

const App: React.FC = () => {
  window.addEventListener("scroll", function () {
    document.body.style.backgroundPosition = `${window.scrollY * 0.05}px ${window.scrollY * 0.8}px`;
  });

  return (
    <Router>
      <AppContainer>
        <SelfSummary />

        <Navbar>
          <NavbarLink to="/">Games 👾</NavbarLink>
          <NavbarLink to="/about-me">About me 👨🏻‍💻</NavbarLink>
          <NavbarLink to="/contact">Contact 💬</NavbarLink>
        </Navbar>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </AppContainer>
      <Footer />
    </Router>
  );
};

export default App;
