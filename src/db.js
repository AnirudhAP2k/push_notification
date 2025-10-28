const userTokens = new Map(); // Replace with DB later

export const saveToken = (userId, token) => {
  if (!userTokens.has(userId)) userTokens.set(userId, []);
  const tokens = userTokens.get(userId);
  if (!tokens.includes(token)) tokens.push(token);
};

export const getUserTokens = (userId) => userTokens.get(userId) || [];
