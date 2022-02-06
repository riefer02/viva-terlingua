export const formatDate = (date) => {
  const formattedDate = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return formattedDate.toLocaleDateString(undefined, options);
};

export const formatTime = (time) => {
  let [hour, minutes] = time.split(':');
  hour = hour.replace(/^0+/, '');
  const formattedHour = ((parseInt(hour) + 11) % 12) + 1;
  const meridiem = parseInt(hour) >= 12 ? 'PM' : 'AM';
  const formattedTime = `${formattedHour}:${minutes} ${meridiem}`;

  return formattedTime;
};

export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}
