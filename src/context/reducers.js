import { setDataCalon, setFilterDataCalon, setUser } from "./type";

export const handleSetDataCalon = (data) => {
  return { type: setDataCalon, payload: data };
};

export const handleSetFilterDataCalon = (data) => {
  return { type: setFilterDataCalon, payload: data };
};

export const handleSetUser = (data) => {
  return { type: setUser, payload: data };
};
