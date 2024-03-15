const AccountAPI = {
  registerUser: async (reg_info) => {
    const url = "/api/users/register";
    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reg_info),
    });
  },

  searchAccounts: async (filter) => {
    const url = "/api/accounts/search";
    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(filter),
    });
  },

  registerAccount: async (reg_info) => {
    const url = "/api/accounts/register";
    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reg_info),
    });
  },

  inquiryAccount: async (form_data) => {
    const url = "/api/accounts/inquiry";
    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form_data),
    });
  },
};

export default AccountAPI;
