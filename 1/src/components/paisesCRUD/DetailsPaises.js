import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const PaisesDetails = ({ setShowDetails, paisDetails }) => {
  const paisToDisplay = useSelector((state) => state.paisesReducer.paises);

  return (
    <div>
      <Table
        className="mt-5 mb-5 text-capitalize"
        striped
        bordered
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Habitantes</th>
            <th>Tamaño</th>
            <th>Estados</th>
            <th>capital</th>
          </tr>
        </thead>
        <tbody>
          {paisToDisplay.map((pais, index) => {
            if (paisDetails === pais.id) {
              return (
                <tr key={index}>
                  <td>{pais.id}</td>
                  <td>{pais.nombre}</td>
                  <td>{pais.habitantes}</td>
                  <td>{pais.tamaño}</td>
                  <td>{pais.estados}</td>
                  <td>{pais.capital}</td>
                </tr>
              );
            } else {
              return <tr key={index}></tr>;
            }
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PaisesDetails;
