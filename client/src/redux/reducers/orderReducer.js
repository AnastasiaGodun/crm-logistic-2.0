import { ADD_COMMENT_ORDER, ADD_ORDER, DELETE_ORDER, EDIT_ORDER, SHOW_ORDER } from '../types/orderTypes'

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_ORDER:
      return action.payload;

    case ADD_ORDER:
      return action.payload;

    case EDIT_ORDER:
      return action.payload;

    case ADD_COMMENT_ORDER:
      return action.payload;

    case DELETE_ORDER:
      return {};

    default:
      return state;
  }
}

export default orderReducer;
