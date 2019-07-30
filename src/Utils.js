const formatSeconds = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds); // specify value for SECONDS here
  return (date.toISOString().substr(11, 8));
};

export { formatSeconds };
