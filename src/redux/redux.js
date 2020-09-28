export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState = undefined;
  let currentListeners = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach((listener) => {
      listener();
    });
  }
  function subscribe(listener) {
    currentListeners.push(listener);
  }
  dispatch({ type: "@selfinvoke" });
  return {
    getState,
    dispatch,
    subscribe,
  };
}

export function applyMiddleware(...middlewares) {
  return (createStore) => (...args) => {
    const store = createStore(...args);
    let { dispatch, getState } = store;
    const middleApi = {
      getState: getState,
      dispatch,
    };
    const middlewaresChain = middlewares.map((middleware) =>
      middleware(middleApi)
    );
    dispatch = compose(...middlewaresChain)(dispatch);
    return {
      ...store,
      dispatch,
    };
  };
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((pre, current) => (...args) => pre(current(...args)));
}
