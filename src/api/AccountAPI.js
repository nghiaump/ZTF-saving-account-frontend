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
};

export default AccountAPI;
