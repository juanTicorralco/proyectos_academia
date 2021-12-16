import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  comprarPokemon,
  regresarPokemon,
} from "../redux/actions/ActionPokemon";

const CardPrincipal = () => {
  const state = useSelector((state) => state.gameShop);

  const dispatch = useDispatch();

  const comprar = () => {
    dispatch(comprarPokemon(1));
  };

  const regresar = () => {
    dispatch(regresarPokemon(1));
  };

  return (
    <div>
      <div className="container mt-5">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Unidades: {state.Pokemones}</Card.Title>
                <Card.Text>
                  <Button variant="dark" className="mb-2" onClick={comprar}>
                    Comprar Pokemon
                  </Button>
                  <br />
                  <Button variant="dark" onClick={regresar}>
                    Regresar pokemon
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CardPrincipal;
