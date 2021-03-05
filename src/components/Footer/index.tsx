import React from "react";
import { Button } from "react-bootstrap";
import './footer.scss'

const Footer = () => (
  <>
    <footer className="footer">
      <p>Allrights Reserved @ 2021</p>
    </footer>
    <Button
      className="scroll-to-top"
      onClick={() => window.scrollTo(0, 0)}
      variant="outline-primary"
    >
      &#8593;
    </Button>
  </>
);

export default Footer;