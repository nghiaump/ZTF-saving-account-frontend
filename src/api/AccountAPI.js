const AccountAPI = {
  registerUser: async (reg_info) => {
    const url = `${process.env.REACT_APP_DOMAIN_SERVER}/api/users/register`;
    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reg_info),
    });
  },

  searchAccounts: async (filter) => {
    const url = `${process.env.REACT_APP_DOMAIN_SERVER}/api/accounts/search`;
    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(filter),
    });
  },

  registerAccount: async (reg_info) => {
    const url = `${process.env.REACT_APP_DOMAIN_SERVER}/api/accounts/register`;
    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reg_info),
    });
  },

  inquiryAccount: async (form_data) => {
    const url = `${process.env.REACT_APP_DOMAIN_SERVER}/api/accounts/inquiry`;
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
