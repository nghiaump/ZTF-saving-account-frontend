export const dataInitState = {
  status: "NONE",
  form_data: {
    user_id: "",
    account_id: "",
  },
  response: {},
};

export function dataReducer(state, action) {
  switch (action.type) {
    case "changeState": {
      return {
        ...state,
        form_data: {
          ...state.form_data,
          ...action.payload,
        },
      };
    }

    case "submitState": {
      // TODO
      return {
        ...state,
        //reg_status: "OK",
      };
    }

    case "setResponse": {
      return {
        ...state,
        status: action.status,
        response: action.data,
      };
    }

    default: {
      return state;
    }
  }
}
