
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';

const Charity = () => {
  return (
    <section className="facts__area fix p-relative pt-120 pb-120 facts__pb">
      <Container>
        <Row>
          <Col xxl={6} xl={5} lg={5} md={8} sm={10}>
            <div className="facts__thumb">
              <div className="facts__thumb-shape">
                <img className="facts-s-1" src="/assets/images/shape/facts/facts-s-1.png" alt="" />
                <img className="facts-s-2" src="/assets/images/shape/facts/facts-s-2.png" alt="" />
                <img className="facts-s-3" src="/assets/images/shape/facts/facts-s-3.png" alt="" />
                <img className="facts-s-4 d-none d-md-block" src="/assets/images/shape/facts/facts-s-4.png" alt="" />
              </div>
              <div className="facts__thumb-image">
                <img src="/assets/images/facts/facts-img.png" alt="" />
              </div>
            </div>
          </Col>
          <Col xxl={6} xl={7} lg={7} md={9}>
            <div className="facts__content">
              <div className="facts__content-text">
                <SectionTitle subTitle="Community Outreach"
                  titleFirst="Committed to"
                  titleSecond="promoting charitable organizations"
                />
                <p>Here are Swent Consulting we are committed to promoting charitable organizations, non-profits, and black-owned businesses by offering discounts and flexible payment options on a need-based system.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Charity;
