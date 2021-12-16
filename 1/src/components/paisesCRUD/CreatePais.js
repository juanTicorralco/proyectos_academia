import React from "react";
import { useDispatch } from "react-redux";
import { crearPais } from "../../redux/actions/ActionPaises";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "../../hooks/useForm";

const initialForm = {
  nombre: "",
  habitantes: "",
  tamaño: "",
  estados: "",
  capital: "",
};
const validateForm = (form) => {
  let error = {};
  let regexNumEntero = /^\d+$/;
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexTamaño = /^[a-zA-Z0-9,.!? ]*$/;

  if (!form.nombre.trim()) {
    error.nombre = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.nombre.trim())) {
    error.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }
  if (!form.habitantes.trim()) {
    error.habitantes = "El campo 'Habitantes' es requerido";
  } else if (!regexNumEntero.test(form.habitantes.trim())) {
    error.habitantes = "El campo 'Habitantes' solo permite numeros enteros";
  }
  if (!form.tamaño.trim()) {
    error.tamaño = "El campo 'Tamaño' es requerido";
  } else if (!regexTamaño.test(form.tamaño.trim())) {
    error.tamaño = "El campo 'Tamaño' solo permite numeros y letras";
  }
  if (!form.estados.trim()) {
    error.estados = "El campo 'Estados' es requerido";
  } else if (!regexNumEntero.test(form.estados.trim())) {
    error.estados = "El campo 'Estados' solo acepta numeros enteros";
  }
  if (!form.capital.trim()) {
    error.capital = "El campo 'Capital' es requerido";
  } else if (!regexName.test(form.capital.trim())) {
    error.capital = "El campo 'Capital' solo acepta letras y espacios";
  }
  return error;
};

const PaisCreate = ({ setShowCreate }) => {
  const dispatch = useDispatch();

  const {
    form,
    error,
    response,
    handleChange,
    handleBlur,
    setError,
    setLoading,
    setResponse,
    setForm,
  } = useForm(initialForm, validateForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(form));
    if (Object.keys(error).length === 0) {
      setLoading(true);

      const datos = {
        nombre: e.target.nombre.value,
        habitantes: e.target.habitantes.value,
        tamaño: e.target.tamaño.value,
        estados: e.target.estados.value,
        capital: e.target.capital.value,
      };

      dispatch(crearPais(datos));

      setLoading(false);
      setForm(initialForm);
      setResponse(true);
      setTimeout(() => {
        setResponse(false);
        setShowCreate(false);
      }, 1000);
    } else {
      return;
    }
  };

  return (
    <Form className="p-5" name="formulario" onSubmit={handleSubmit}>
      <h1>Crear Un Pais</h1>
      <Form.Group className="mb-3">
        <Form.Label>Nombre: </Form.Label>
        <Form.Control
          value={form.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          type="text"
          name="nombre"
          placeholder="Nombre del Pais"
        />
      </Form.Group>
      {error.nombre && <Badge bg="danger">{error.nombre}</Badge>}
      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Habitantes: </Form.Label>
        <Form.Control
          onChange={handleChange}
          onBlur={handleBlur}
          required
          value={form.habitantes}
          name="habitantes"
          type="text"
          placeholder="No de Habitantes"
        />
      </Form.Group>
      {error.habitantes && <Badge bg="danger">{error.habitantes}</Badge>}
      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Tamaño: </Form.Label>
        <Form.Control
          onChange={handleChange}
          onBlur={handleBlur}
          required
          value={form.tamaño}
          name="tamaño"
          type="text"
          placeholder="Extension territorial"
        />
      </Form.Group>
      {error.tamaño && <Badge bg="danger">{error.tamaño}</Badge>}
      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Estados: </Form.Label>
        <Form.Control
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.estados}
          required
          name="estados"
          type="text"
          placeholder="No de Estados"
        />
      </Form.Group>
      {error.estados && <Badge bg="danger">{error.estados}</Badge>}
      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Capital: </Form.Label>
        <Form.Control
          onChange={handleChange}
          onBlur={handleBlur}
          required
          value={form.capital}
          name="capital"
          type="text"
          placeholder="Capital"
        />
      </Form.Group>
      {error.capital && (
        <Badge className="mb-3" bg="danger">
          {error.capital}
        </Badge>
      )}{" "}
      <br />
      <Button variant="primary" className="mb-3" type="submit">
        Guardar
      </Button>
      <br />
      {response && <Badge bg="success">Se creo el pais correctamente</Badge>}
    </Form>
  );
};

export default PaisCreate;
