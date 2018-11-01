import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER: {
      if (action.error) {
        console.log(action);
        //burada geldiğinde redux-promise actiona error:true koymuş oluyor
        throw new Error();
      } else {
        return [action.payload.data, ...state];
      }
    }

    default:
      return state;
  }
}
