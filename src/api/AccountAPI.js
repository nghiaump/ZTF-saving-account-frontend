const AccountAPI = {
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
    console.log("after stringify", reg_info);
  },
};

export default AccountAPI;
