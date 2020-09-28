export function logger({ getState, dispatch }) {
  return (dispatch) => (action) => {
    console.log("action", action);

    console.log(action.type, "执行了");
    return dispatch(action);
  };
}
