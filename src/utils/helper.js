export function convertDate(date) {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  return new Date(date).toLocaleDateString('en-us', options);
}