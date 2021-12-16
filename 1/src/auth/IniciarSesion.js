import React from "react";
import { Card, Button, Form, Container, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { listarUsuarios, UnUsuarios } from "../redux/actions/ActionPaises";
import { useEffect } from "react";
import SwitchMenu from "../components/SwitchMenu";
import { Link } from "react-router-dom";

const initialForm = {
  email: "",
  password: "",
};
const validateForm = (form) => {
  let error = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.email.trim()) {
    error.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    error.email = "Solo acepta un formato 'Email'";
  }
  if (!form.password.trim()) {
    error.password = "El campo 'Password' es requerido";
  }
  return error;
};

const IniciarSesion = () => {
  const dispatch = useDispatch();
  const {
    form,
    error,
    response,
    loading,
    Ploach,
    setPloach,
    handleChange,
    handleBlur,
    setError,
    setLoading,
    setResponse,
  } = useForm(initialForm, validateForm);

  const usuarioToCheck = useSelector((state) => state.usuariosReducer.usuarios);

  useEffect(() => {
    dispatch(listarUsuarios());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(validateForm(form));

    if (Object.keys(error).length === 0) {
      const datos = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      dispatch(UnUsuarios(datos.email));

      if (
        usuarioToCheck[0].email === datos.email &&
        usuarioToCheck[0].password === datos.password
      ) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setResponse(true);
        }, 1000);
      } else {
        setPloach(true);
        setResponse(false);
        setLoading(false);
        setTimeout(() => {
          setPloach(false);
          setLoading(null);
        }, 3000);
      }
    } else {
      return;
    }
  };

  return (
    <div>
      {!response ? (
        <div className="mt-5">
          <Container>
            <Card style={{ width: "18rem" }} className=" mx-auto">
              <Card.Body>
                <h1>Iniciar Sesion</h1>
                <Form name="formulario" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      name="password"
                      type="password"
                      placeholder="Escribe tu Password"
                    />
                  </Form.Group>
                  {error.password && (
                    <Badge className="mb-3" bg="danger">
                      {error.password}
                    </Badge>
                  )}

                  <Button variant="primary" className="mx-3" type="submit">
                    Entrar
                  </Button>
                  <Button variant="light" className="mx-3">
                    <Link
                      className=" text-black text-wrap text-decoration-none"
                      to="/registrarse"
                    >
                      Registrarse
                    </Link>
                  </Button>
                  <br />
                  {loading && (
                    <Badge className="mt-3" bg="success">
                      Te Logeaste Correctamente
                    </Badge>
                  )}
                  {Ploach && (
                    <Badge className="mt-3" bg="danger">
                      El usuario o la contraseña son incorrectos
                    </Badge>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </div>
      ) : (
        <div>
          <SwitchMenu />
        </div>
      )}
    </div>
  );
};
export default IniciarSesion;
