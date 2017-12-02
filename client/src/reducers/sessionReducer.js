import { SESSION_KEYS } from "../actions/types";

export default (state = null, action) => {

  switch (action.type) {

    case(SESSION_KEYS):
      return action.payload || false;

    default:
      return state;

  }

};