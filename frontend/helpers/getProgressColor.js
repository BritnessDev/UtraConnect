export default function getProgressColor(progress) {
  return progress < 20 ? 'warning' : progress < 100 ? 'primary' : 'success';
}
