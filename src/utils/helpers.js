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

export const ordinalSuffixOf = (i) => {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + 'st';
  }
  if (j == 2 && k != 12) {
    return i + 'nd';
  }
  if (j == 3 && k != 13) {
    return i + 'rd';
  }
  return i + 'th';
};
