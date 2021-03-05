import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import "./header.scss";

const Header = () => {
  const history = useHistory()
  const toHome = () => {
    window.scrollTo(0, 0);
    history.push({ pathname: "/", state: "" });
  };

  return (
    <>
      <div className="bottom-nav shadow">
        <Row>
          <Col xs={12}>
            <Button onClick={toHome} variant="outline-link" className="p-0">
              <span style={{ fontSize: '2rem' }}>&#x2302; </span>
            Home
            </Button>
          </Col>
        </Row>
      </div>
      <Jumbotron className="bg-header" fluid>
        <Container>
          <Link to={{ pathname: "/", state: "" }}>
            <h1 style={{ color: "#fff" }}>Informasi Seputar Covid-19</h1>
          </Link>
          <p style={{ color: "#fff" }}>
            Temukan data terupdate mengenai Covid-19 di
            setiap negara.
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};
export default Header;
