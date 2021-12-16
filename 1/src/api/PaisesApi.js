import http from "../conexionApi";

class PaisesService {
  getAll() {
    return http.get("/Paises?_page=1&_limit=110");
  }

  get(id) {
    return http.get(`/Paises/${id}`);
  }

  create(data) {
    return http.post("/Paises", data);
  }

  update(id, data) {
    return http.put(`/Paises/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Paises/${id}`);
  }

  getUsuario(email) {
    return http.get(`/Usuario?email=${email}`);
  }

  getAllUsuario() {
    return http.get("/Usuario");
  }

  createUsuario(data) {
    return http.post("/Usuario", data);
  }
}

export default new PaisesService();
