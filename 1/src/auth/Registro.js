import React from "react";
import { Card, Button, Form, Container, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { crearUsuario } from "../redux/actions/ActionPaises";

const initialForm = {
  usuario: "",
  nombre: "",
  email: "",
  password: "",
};
const validateForm = (form) => {
  let error = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  let regexUsuario = /^[a-zA-Z0-9_.-]*$/;

  if (!form.usuario.trim()) {
    error.usuario = "El campo 'Usuario' es requerido";
  } else if (!regexUsuario.test(form.usuario.trim())) {
    error.usuario = "Solo letras numeros, puntos y guiones";
  }
  if (!form.nombre.trim()) {
    error.nombre = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.nombre.trim())) {
    error.nombre = "Solo acepta letras y espacios";
  }
  if (!form.email.trim()) {
    error.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    error.email = "Solo acepta un formato 'Email'";
  }
  if (!form.password.trim()) {
    error.password = "El campo 'Password' es requerido";
  } else if (!regexPassword.test(form.password.trim())) {
    error.password = "8 a 16 caracteres, una mayuscula y numero";
  }
  return error;
};

const Registro = () => {
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
        usuario: e.target.usuario.value,
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      dispatch(crearUsuario(datos));
      setLoading(false);
      setForm(initialForm);
      setResponse(true);
      setTimeout(() => {
        setResponse(false);
      }, 2000);
    } else {
      return;
    }
  };

  return (
    <div className="mt-5">
      <Container>
        <Card style={{ width: "18rem" }} className=" mx-auto">
          <Card.Body>
            <h1>Registrarse</h1>
            <Form name="formulario" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="usuario">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  value={form.usuario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  name="usuario"
                  type="text"
                  placeholder="Escribe un usuario"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              {error.usuario && <Badge bg="danger">{error.usuario}</Badge>}
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  value={form.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  name="nombre"
                  type="text"
                  placeholder="Escribe tu nombre completo"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              {error.nombre && <Badge bg="danger">{error.nombre}</Badge>}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  name="email"
                  type="email"
                  placeholder="Escribe tu email"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              {error.email && <Badge bg="danger">{error.email}</Badge>}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={form.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  name="password"
                  type="password"
                  placeholder="Escribe tu Password"
                />
              </Form.Group>
              {error.password && (
                <Badge className="mb-3 blockquote" bg="danger">
                  {error.password}
                </Badge>
              )}
              <Button variant="primary" type="submit">
                Registrarse
              </Button>
              <br />
              {response && (
                <Badge className="mt-3 mw-25" bg="success">
                  Usuario registrado correctamente
                </Badge>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
export default Registro;
