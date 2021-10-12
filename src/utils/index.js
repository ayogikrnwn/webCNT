export const replaceEmail = (str) => {
  if (str) {
    return str.replace("@gmail.com", "");
  } else {
    return false;
  }
};
