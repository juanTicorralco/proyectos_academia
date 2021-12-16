import ActionTypes from "./ActionTypes";

export const incrementar = () => {
  return { type: ActionTypes.INCREMENTAR };
};

export const disminuir = () => {
  return { type: ActionTypes.DISMINUIR };
};
