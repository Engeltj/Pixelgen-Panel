const getInitialState = function() {
  return {
    user: null,
    signingIn: false,
    hasError: false
  };
};

export default function(state, action) {
  if (!state) {
    state = getInitialState();
  }

  switch (action.type) {
    case 'SIGN_IN':
      console.log('Action: ', action.payload);
      return { ...state, ...{ signingIn: true, hasError: false } };
    case 'SIGN_IN_SUCCESS':
      return { ...state, ...{ signingIn: false } };
    case 'SIGN_IN_ERROR':
      return { ...state, ...{ signingIn: false, hasError: true } };
    default:
      return state;
  }
}