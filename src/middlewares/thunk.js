export function thunk({ getState, dispatch }) {
  return (dispatch) => (action) => {
    // deal action type => plain or callback
    if (typeof action === "function") {
      return action(dispatch, getState);
    } else {
      return dispatch(action);
    }
  };
}
