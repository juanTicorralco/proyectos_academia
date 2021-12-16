import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { eliminarPais } from "../../redux/actions/ActionPaises";
import Button from "react-bootstrap/Button";

const PaisesDelete = ({ setShowDelete, PaisDelete }) => {
  const dispatch = useDispatch();

  const PaisesToDelete = useSelector((state) => state.paisesReducer.paises);

  const formSuccess = () => {
    PaisesToDelete.map((pais) => {
      if (PaisDelete === pais.id) {
        dispatch(eliminarPais(pais.id));
      }
      return 0;
    });
    setShowDelete(false);
  };

  return (
    <Button className="mb-5" variant="danger" onClick={formSuccess}>
      confirmar
    </Button>
  );
};

export default PaisesDelete;
