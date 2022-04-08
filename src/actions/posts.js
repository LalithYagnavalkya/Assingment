import axios from "axios";
import { GET_POST, GET_POSTS, GET_POSTS_ERROR } from "./types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("https://reqres.in/api/users?page=1");
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_POSTS_ERROR,
      payload: err,
    });
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  console.log(id);
  try {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_POSTS_ERROR,
      payload: err,
    });
  }
};
