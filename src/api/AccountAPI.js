const AccountAPI = {
  searchAccounts: async (payload) => {
    const url = "/api/accounts/search";

    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};

export default AccountAPI;
