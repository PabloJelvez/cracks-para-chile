import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer text-center p-3 ">
      <div className="footerContent row">
        <div className="footer-form col-12 col-md-6 col-lg-6">
          <h3 id="footer" className="my-3">Contáctanos</h3>
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
          <Button className="btn-footer m-3">Enviar</Button>
        </div>
        <div className="footer-rrss col-12 col-md-6 col-lg-6">
          <h3 className="text-center my-3">Nuestras Redes</h3>
          <ul className="ul-rrss">
            <li>
                <FontAwesomeIcon icon={faInstagram} className="mx-3 icons" />
                @cracks_para_chile
            </li>
            <li>
               <FontAwesomeIcon icon={faFacebook} className="mx-3 icons" />
               www.facebook.com/cracks_para_chile/
            </li>
            <li>
                <FontAwesomeIcon icon={faWhatsapp} className="mx-3 icons" />
              +56 985482578
            </li>
            <li>
            <FontAwesomeIcon icon={faEnvelope} className="mx-3 icons" />
            cracksparachile@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>Cracks para Chile 2024</p>
      </div>

    </div>
  );
};

export default Footer;
