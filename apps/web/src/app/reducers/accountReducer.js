const initialState = {
  accounts: [],
  account: null,
  accountLoading: true,
  searchAccounts: [],
  accountsLoading: true,
  activities: [],
  activitiesLoading: true,
  categories: [],
  modal: false,
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
    case 'getAccount':
      if (action.payload === '') {
        return { ...state, account: {}, accountLoading: null };
      } else
        return { ...state, account: action.payload, accountLoading: false };
    case 'searchAccounts':
      const searchedArr = state.searchAccounts.filter((accountItem) => {
        const matchState =
          accountItem.name
            .trim()
            .replaceAll('I', 'ı')
            .replaceAll('İ', 'i')
            .toLowerCase()
            .match(
              action.payload.keyw
                .trim()
                .replaceAll('I', 'ı')
                .replaceAll('İ', 'i')
                .toLowerCase()
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

    case 'postAccounts':
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
        searchAccounts: [...state.searchAccounts, action.payload],
      };

    case 'getActivities':
      const filteredActivities = action.payload.filter(
        (item) => item.accountId == action.filter
      );
      return {
        ...state,
        activities: filteredActivities,
        activitiesLoading: false,
      };
    case 'postActivities':
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case 'getCategories':
      return {
        ...state,
        categories: action.payload,
      };

    case 'toggleModal':
      return { ...state, modal: !state.modal };
    default:
      return state;
  }
};
