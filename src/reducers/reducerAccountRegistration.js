export const dataAccRegInitState = {
  reg_status: "NONE",
  reg_info: {
    user_id: "",
    id_card_number: "",
    balance: 0,
    term_type: "",
    term: 0,
    term_in_days: 0,
    kyc: 2,
    created_date: "",
    due_date: "",
    rate: 0,
  },
  response: {},
};

export function dataAccRegReducer(state = dataAccRegInitState, action) {
  switch (action.type) {
    case "changeRegInfo": {
      return {
        ...state,
        reg_info: {
          ...state.reg_info,
          ...action.payload,
        },
      };
    }

    case "dataLoaded": {
      // TODO
      console.log(">>action.response:", action.response);
      return {
        ...state,
        reg_status: "OK",
      };
    }

    case "setResponse": {
      return {
        ...state,
        response: action.response,
      };
    }

    default: {
      return state;
    }
  }
}
