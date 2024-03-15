import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function HomePage() {
  return (
    <Container>
      <Row className="justify-content-center mt-5 mb-5 font-weight-bold bg-light">
        WELCOME
      </Row>
      <Row>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          elementum, velit non posuere imperdiet, metus diam sollicitudin urna,
          eget aliquet tortor nunc ut tortor. Fusce justo mauris, tincidunt eu
          dolor ultricies, scelerisque rutrum orci. Morbi eget neque in lacus
          molestie ullamcorper. Curabitur sodales enim ut purus semper, a
          consequat tortor interdum. In feugiat ante ante, sit amet dapibus
          neque tempor sed. Integer tincidunt neque imperdiet pretium ornare.
          Curabitur vitae euismod nulla, a dignissim nunc. Maecenas vitae magna
          sed urna ultricies pharetra.
        </h5>
      </Row>
    </Container>
  );
}
