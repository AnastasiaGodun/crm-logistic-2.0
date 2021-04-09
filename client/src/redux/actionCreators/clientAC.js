import { ADD_CLIENT, ADD_CLIENT_SAGA, SHOW_CLIENT, SHOW_CLIENT_SAGA } from '../types/clientTypes'

export const showClient = (client) => {
  return {
    type: SHOW_CLIENT,
    payload: client,
  };
};

export const showClientSaga = (id) => {
  return {
    type: SHOW_CLIENT_SAGA,
    payload: id
  };
};

export const addClient = (client) => {
  return {
    type: ADD_CLIENT,
    payload: client,
  };
};

export const addClientSaga = (client) => {
  return {
    type: ADD_CLIENT_SAGA,
    payload: client,
  };
};
