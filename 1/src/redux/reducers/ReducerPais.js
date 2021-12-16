import * as ActionTypes from "../actions/ActionTypes";

export const initialState = { paises: [] };
export const initialUsuario = {
  usuarios: [
    {
      email: "",
      password: "",
    },
  ],
};

export const paisesReducer = (state = initialState, action) => {
  const { type, pais } = action;

  switch (type) {
    case ActionTypes.CREATE_PAISES:
      return { paises: [...state.paises, pais] };

    case ActionTypes.UPDATE_PAISES:
      return {
        ...state.paises,
        paises: state.paises.map((pai) => {
          if (pai.id === pais.id) {
            return {
              ...pai,
              ...pais,
            };
          } else {
            return pai;
          }
        }),
      };

    case ActionTypes.DELETE_PAISES:
      return {
        ...state.paises,
        paises: state.paises.filter((pas) => {
          if (pas.id !== pais) {
            return { ...pas, pas };
          } else {
            return 0;
          }
        }),
      };

    case ActionTypes.RETRIEVE_PAISES:
      return { ...state, paises: pais };
    default:
      return state;
  }
};

export const usuariosReducer = (state = initialUsuario, action) => {
  const { type, usuario } = action;

  switch (type) {
    case ActionTypes.CREATE_USUARIO:
      return { usuarios: [...state.usuarios, usuario] };

    case ActionTypes.CHECK_USUARIO:
      return { ...state, usuarios: usuario };

    case ActionTypes.CHECK_USUARIO_UNO:
      return { ...state, usuarios: usuario };

    default:
      return state;
  }
};
