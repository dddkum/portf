import React from "react";
import "./About.scss";
import MyPhoto from "../../../img/ME.jpg";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import CarouselFirstImage from "../../../img/meteor.png";
import CarouselSecondImage from "../../../img/Cloud.png";
import Button from "react-bootstrap/Button";

export const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col>
            <Image
              className="my-photo"
              src={MyPhoto}
              alt="Me"
              width={450}
              height={700}
            />
          </Col>
          <Col>
            <div>
              <h1>Кумачёв Дмитрий Александрович</h1>
              <h3>Junior frontend-разработчик</h3>
              <Button variant="outline-light" className="contacts-button">
                <Link to="/contacts" className="contacts-text">
                  Мои контакты
                </Link>
              </Button>
            </div>
            <div className="carousel">
              <Button variant="outline-light" className="works-button">
                <Link to="https://github.com/dddkum" className="works-text">
                  Мои работы
                </Link>
              </Button>
              <Carousel className="carousel">
                <Carousel.Item>
                  <Link to="https://github.com/dddkum/meteorites">
                    <Image
                      src={CarouselFirstImage}
                      alt="First slide"
                      className="carousel-image"
                    />
                  </Link>
                  <Carousel.Caption>
                    <h3>Браузерная игра Goldparachute</h3>
                    <p>Защити город от разрушительных метеоритов</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={CarouselSecondImage}
                    alt="Second slide"
                    className="carousel-image"
                  />
                  <Carousel.Caption>
                    <h3>Портфолио</h3>
                    <p>Вы сейчас его наблюдаете</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
