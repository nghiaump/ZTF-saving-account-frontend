export const dataInitState = {
  data: [],
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
  console.log(">>action.type:", action.type);
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
      const data = action.response;

      return {
        ...state,
        data,
      };
    }

    default: {
      return state;
    }
  }
}
