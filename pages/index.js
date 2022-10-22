import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import HeroTwo from "../components/HeroTwo";
import Mission from "../components/Mission";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const Home = () => {
  const hlogo = `/assets/images/logo/Logo-white.svg`
  return (
    <Layout pageTitle="Swent Consulting">
      <Header heroLogo={hlogo}
        headerClass="header__area-2"
        menuClass="main-menu-2"
        sideMenuClass="icon-white"
      />
      <main>
        <HeroTwo />
        <Mission />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
