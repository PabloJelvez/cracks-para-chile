import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer text-center p-3 ">
      <div className="footerContent">
        <div className="footer-form">
          <h3 id="footer">Contáctanos</h3>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="E-mail  " />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
            </Form.Group>
          </Form>
          <Button className="btn-footer">Enviar</Button>
        </div>
        <div className="footer-rrss">
          <h3>Nuestras Redes</h3>
        </div>
      </div>
      <div>
        <p>Cracks para Chile 2024</p>
      </div>
    </div>
  );
};

export default Footer;
