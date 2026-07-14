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
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 24px 64px;
  gap: 28px;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 24px 16px 48px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 6px;
  margin: 0 auto;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 10px;
  width: fit-content;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 6px;
  }
`;

const NavbarLink = styled(Link)`
  font-size: 0.95rem;
  text-decoration: none;
  color: var(--muted);
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    background: var(--panel-hover);
    color: var(--text);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 12px;
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <SelfSummary />

        <Navbar>
          <NavbarLink to="/">My Works</NavbarLink>
          <NavbarLink to="/about-me">Know more about me</NavbarLink>
          <NavbarLink to="/contact">Say Hi</NavbarLink>
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
