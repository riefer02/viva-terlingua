const isBrowser = typeof window !== `undefined`;

const getUser = () =>
  window.localStorage.terlinguaUser
    ? JSON.parse(window.localStorage.terlinguaUser)
    : {};

const setUser = (user) =>
  (window.localStorage.terlinguaUser = JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false;

  if (
    username === process.env.PORTAL_USERNAME &&
    password === process.env.PORTAL_PASSWORD
  ) {
    console.log(`Credentials match! Setting the active user.`);
    return setUser({
      name: `Viva Terlingua`,
      email: `vivaterlingua@cookoff.com`,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();

  return !!user.email;
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = (callback) => {
  if (!isBrowser) return;

  console.log(`Ensuring the \`terlinguaUser\` property exists.`);
  setUser({});
  callback();
};
