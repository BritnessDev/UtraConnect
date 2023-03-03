export default function formatLocaleDateString(date, options) {
  return new Date(date).toLocaleDateString('en-US', options);
}
