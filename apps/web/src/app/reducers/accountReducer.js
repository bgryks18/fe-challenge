const initialState = {
  accounts: [],
  categories: [],
  error: false,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'addError':
      const { message, code, title } = action.payload;
      return {
        ...state,
        error: true,
        errors: [
          ...state.errors,
          { errorContent: message, errorCode: code, errorTitle: title },
        ],
      };
    case 'getCategories':
      return { ...state, categories: action.payload };
    case 'getAccounts':
      return { ...state, accounts: action.payload };
    default:
      return state;
  }
};
