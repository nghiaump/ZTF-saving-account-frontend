export const dataInitState = {
  acc_list: [],
  agg: {
    total_balance: 0,
    total_hits: 0,
  },
  filter: {
    kyc: 2,
    term_in_days: 90,
    min_balance: 0,
    due_date_earliest: "",
    due_date_latest: "",
    page_size: 10,
    page_index: 1,
  },
};

export function dataReducer(state, action) {
  switch (action.type) {
    case "changeFilter": {
      return {
        ...dataInitState,
        filter: {
          ...state.filter,
          ...action.selectedFilter,
        },
      };
    }

    case "dataLoaded": {
      console.log(">>action.response:", action.response);
      const { acc_list, agg_total_balance, agg_total_hits } = action.response;

      return {
        ...state,
        acc_list,
        agg: {
          total_balance: agg_total_balance,
          total_hits: agg_total_hits,
        },
      };
    }

    default: {
      return state;
    }
  }
}
