import { FETCH_NEWS } from "../actions";
export const newsReducer = (
  state = [],
  action: { type: string; payload: Record<string, unknown> }
) => {
  switch (action.type) {
    case FETCH_NEWS:
      return [action.payload.data, ...state];
    default:
      break;
  }
  return state;
};
