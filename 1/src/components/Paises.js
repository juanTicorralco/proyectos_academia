import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { listarPaises } from "../redux/actions/ActionPaises";
import PaisCreate from "./paisesCRUD/CreatePais";
import PaisesDelete from "./paisesCRUD/DeletePais";
import PaisesDetails from "./paisesCRUD/DetailsPaises";
import PaisesUpdate from "./paisesCRUD/UpdatePais";

const PaisesList = () => {
  const dispatch = useDispatch();

  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedPais, setSelectedPais] = useState(0);

  const state = useSelector((state) => state.paisesReducer.paises);
  const showModalAgregar = () => {
    setShowCreate(true);
    setShowUpdate(false);
    setShowDelete(false);
    setShowDetails(false);
  };

  const selectingPais = (index, accion) => {
    setSelectedPais(index);

    if (accion === "Actualizar") {
      setShowUpdate(true);
      setShowCreate(false);
      setShowDelete(false);
      setShowDetails(false);
    }
    if (accion === "Eliminar") {
      setShowDelete(true);
      setShowCreate(false);
      setShowUpdate(false);
      setShowDetails(false);
    }
    if (accion === "Detalles") {
      setShowDetails(true);
      setShowCreate(false);
      setShowUpdate(false);
      setShowDelete(false);
    }
  };

  useEffect(() => {
    dispatch(listarPaises());
  }, []);

  return (
    <div className="px-5">
      <Fragment>
        <ListGroup as="ul" className="mb-5">
          <div className="d-flex text-capitalize">
            <ListGroup.Item as="li" active action>
              Lista de Paises
            </ListGroup.Item>
            <Button
              variant="secondary"
              className="mx-1 px-5"
              onClick={showModalAgregar}
            >
              Crear Pais
            </Button>
          </div>
          {state.map((pais, index) => {
            return (
              <div className="d-flex text-capitalize" key={index}>
                <ListGroup.Item className="text-capitalize" action>
                  {pais.nombre}
                </ListGroup.Item>
                <Button
                  className="m-1"
                  variant="primary"
                  onClick={() => selectingPais(pais.id, "Actualizar")}
                >
                  Editar
                </Button>
                <Button
                  className="m-1"
                  variant="danger"
                  onClick={() => selectingPais(pais.id, "Eliminar")}
                >
                  Borrar
                </Button>
                <Button
                  className="m-1"
                  variant="success"
                  onClick={() => selectingPais(pais.id, "Detalles")}
                >
                  Destalles
                </Button>
              </div>
            );
          })}
        </ListGroup>
        {showCreate ? <PaisCreate setShowCreate={setShowCreate} /> : null}
        {showDelete ? (
          <PaisesDelete
            setShowDelete={setShowDelete}
            PaisDelete={selectedPais}
          />
        ) : null}
        {showDetails ? (
          <PaisesDetails
            setShowDetails={setShowDetails}
            paisDetails={selectedPais}
          />
        ) : null}

        {showUpdate ? (
          <PaisesUpdate
            setShowUpdate={setShowUpdate}
            paisEditar={selectedPais}
          />
        ) : null}
      </Fragment>
    </div>
  );
};

export default PaisesList;
