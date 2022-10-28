import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';
import Link from "next/link";

const Mission = () => {
  return (
    <section className="mission__area fix p-relative pt-115 pb-145">
      <div className="mission__shape">
        <img className="m-shape-1 d-none d-sm-block" src="/assets/images/shape/testimonials/t-shape-1.png" alt="" />
        <img className="m-shape-2" src="/assets/images/shape/testimonials/t-shape-2.png" alt="" />
        <img className="m-shape-3" src="/assets/images/shape/testimonials/t-shape-3.png" alt="" />
        <img className="m-shape-4" src="/assets/images/shape/testimonials/t-shape-4.png" alt="" />
      </div>
      <Container>
        <Row className="mb-110">
          <Col xl={12}>
            <div className="mission__title text-center">
              <SectionTitle subTitle="Our Mission"
                titleFirst="Committed to promoting"
                titleSecond="sustainable and charitable growth"
              />
              <p>We are dedicated to being a socially conscious organization by assisting organizations such as the Climate Foundation and offering discounts and flexible payment options to charitable organizations.</p>
              <Link href="/about">
                <a className="m-btn mt-15">Read More</a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="mission__counter">
              <div className="mission__counter-content text-center">
                <p>Up to</p>
                <h2>
                  <CountUp end={100} duration={5} />%
                </h2>
                <p>Discounts for <br/> select charitable <br/> organizations</p>
              </div>
            </div>
            <div className="mission__counter mission__counter-2">
              <div className="mission__counter-content mission__counter-content-2 text-center">
                <h2>
                  <CountUp end={10} duration={5} />%
                </h2>
                <p>Profits Donated</p>
              </div>
            </div>
            <div className="mission__content d-flex">
              <div className="mission__thumb-1">
                <img src="/assets/images/mission/mission-img-1.jpg" alt="" />
              </div>
              <div className="mission__thumb-2">
                <img src="/assets/images/mission/mission-img-2.jpg" alt="" />
              </div>
              <div className="mission__thumb-3">
                <img src="/assets/images/mission/mission-img-3.jpg" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;
