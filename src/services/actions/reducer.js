export const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_SELECT":
        return {
          ...state,
          [action.field]: action.payload,
        };
      default:
        return state;
    }
  };


  