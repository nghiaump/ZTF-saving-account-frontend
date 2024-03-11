export const dataInitState = {
  data: [],
  paging: {
    size: 5,
    page: 1,
    totalPages: 1,
    totalEntries: 0,
  },
  filter: {
    dueDateStart: "",
    dueDateEnd: "",
    minBalance: 0,
    termDays: 30,
    kycLevel: 2,
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
      const {
        data,
        page,
        size,
        total_pages: totalPages,
        total_entries: totalEntries,
      } = action.response;

      return {
        ...state,
        data,
        paging: {
          page,
          size,
          totalPages,
          totalEntries,
        },
      };
    }

    default: {
      return state;
    }
  }
}
