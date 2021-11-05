export const loadUser = (object) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_OBJECT",
      payload: object,
    });
  };
};
