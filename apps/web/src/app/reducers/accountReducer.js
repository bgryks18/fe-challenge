const initialState = {
  accounts: [],
  searchAccounts: [],
  accountsLoading: true,
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
      return {
        ...state,
        accounts: action.payload,
        searchAccounts: action.payload,
        accountsLoading: false,
      };
    case 'searchAccounts':
      const searchedArr = state.searchAccounts.filter((accountItem) => {
        const matchState =
          accountItem.name
            .trim()
            .replaceAll('I', 'ı')
            .toLowerCase()
            .match(
              action.payload.keyw.trim().replaceAll('I', 'ı').toLowerCase()
            ) ||
          accountItem.accountNumber
            .toString()
            .trim()
            .match(action.payload.keyw.trim());

        if (action.payload.type === '') {
          if (matchState) {
            return accountItem;
          }
        } else if (action.payload.type === 'TRY') {
          if (matchState && accountItem.currency === action.payload.type) {
            return accountItem;
          }
        } else {
          if (matchState && accountItem.currency !== 'TRY') {
            return accountItem;
          }
        }
      });
      return { ...state, accounts: searchedArr, accountsLoading: false };
    default:
      return state;
  }
};
