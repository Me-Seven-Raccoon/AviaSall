export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + 'ч. ' + minutes + 'м.';
};

export const timeRelokate = (dateTime, min) => {
  const start = new Date(dateTime);
  const end = new Date(dateTime);
  end.setMinutes(end.getMinutes() + min);
  return `${start.getHours() < 10 ? '0' : ''}${start.getHours()}:${
    start.getMinutes() < 10 ? '0' : ''
  }${start.getMinutes()} -
				${end.getHours() < 10 ? '0' : ''}${end.getHours()}:${end.getMinutes() < 10 ? '0' : ''}${end.getMinutes()}`;
};
