import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import Experience from "../components/Experience";
import TeamHome from "../components/TeamHome";
import Project from "../components/Project";
import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import Charity from "../components/Charity";
import Sustainable from '../components/Sustainable';

const AboutPage = () => {
  return (
    <Layout pageTitle="Swent Consulting | Web Design & IT Agency">
      <PageHeader title="About us" crumbTitle="About us" />
      <Header heroLogo="/assets/images/logo/logo.svg"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <About subTitle="Swent Consulting"
          titleFirst="We are here to help you"
          titleSecond="with all your web and technological needs"
        />
        <Charity />
        <Sustainable extraClass="mb-70"/>
        <Project extraClass="project__area-pt" subTitle="Get Started" />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default AboutPage;
