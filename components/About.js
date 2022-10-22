
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';

const About = ({ subTitle, titleFirst, titleSecond }) => {
  return (
    <section className="about__area fix p-relative pt-120 pb-120 about__pb">
      <Container>
        <Row>
          <Col xxl={7} xl={8} lg={10} md={10}>
            <div className="about__title mb-80">
              <SectionTitle subTitle={subTitle}
                titleFirst={titleFirst}
                titleSecond={titleSecond} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className="about__thumb">
              <div className="about__thumb-shape">
                <img className="about-s-1 d-none d-lg-block" src="/assets/images/shape/about/about-s-1.png" alt="" />
                <img className="about-s-2 d-none d-md-block" src="/assets/images/shape/about/about-s-2.png" alt="" />
              </div>
              <div className="about__thumb-image">
                <img src="/assets/images/about/about-img.jpg" alt="" />
              </div>
            </div>
          </Col>
          <Col xl={{ span: 5, offset: 1 }} lg={6}>
            <div className="about__content">
              <p>Whether you&apos;re a corporation, small business, charitable organization, or just an individual we will work with you to tailor a package that is just right for your specific interests.</p>
              <ul>
                <li>Increase your online presence.</li>
                <li>Train your employees on the uses of organizational software.</li>
                <li>Take advantage of all the features of modern IT infrastructure.</li>
              </ul>
            </div>
            <div className="about__counter-bg d-none d-sm-block">
              <div className="about__counter-content d-flex">
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={10} duration={5} />+
                  </h2>
                  <p>Programming Languages</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={20} duration={5} />+
                  </h2>
                  <p>JavaScript Frameworks</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={100} duration={5} />+
                  </h2>
                  <p>Enterprise-grade Systems Deployed</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
