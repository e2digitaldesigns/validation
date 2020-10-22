module.exports = string => {
  const regExMatch = /^[a-zA-Z\d\/\-_.\s]+$/g;
  if (!regExMatch.test(string) && string !== "") string = null;
  return string;
};
