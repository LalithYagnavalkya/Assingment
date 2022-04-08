import { GET_POST, GET_POSTS, GET_POSTS_ERROR } from "../actions/types";

const initialState = {
  loading: true,
  data: [],
  singePost: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
      };
    case GET_POST:
      return {
        ...state,
        loading: false,
        singePost: action.payload,
      };
    default:
      return state;
  }
}
