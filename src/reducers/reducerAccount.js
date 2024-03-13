export const dataInitState = {
  acc_list: [],
  agg: {
    total_balance: 0,
    total_hits: 0,
  },

  paging: {
    size: 19,
    page: 1,
    totalPages: 1,
    totalEntries: 0,
  },
  filter: {
    kyc: 2,
    term_in_days: 90,
    min_balance: 0,
    due_date_earliest: "",
    due_date_latest: "",
    page_size: 20,
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

    // case "dataLoaded": {
    //   console.log(">>action.response:", action.response);
    //   const {
    //     data,
    //     page,
    //     size,
    //     total_pages: totalPages,
    //     total_entries: totalEntries,
    //   } = action.response;

    //   return {
    //     ...state,
    //     data,
    //     paging: {
    //       page,
    //       size,
    //       totalPages,
    //       totalEntries,
    //     },
    //   };
    // }
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
