import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>Q&A Project &copy; {currentYear} by Pintea Ioan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
