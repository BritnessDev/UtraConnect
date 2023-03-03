export default function getStatusColor(status) {
  switch (status) {
    case 1:
    case 2:
    case 3:
    case 'Cancelled':
      return 'danger';
    case 4:
    case 5:
    case 6:
    case 'Busy':
    case 'Delayed':
    case 'In progress':
    case 'Processing':
    case 'Unavailable':
      return 'warning';
    case 7:
    case 8:
    case 9:
    case 10:
    case 'Available':
    case 'Completed':
    case 'On Schedule':
    case 'Online':
    case 'Paid':
    case 'Reviewed':
    case 'Shipped':
      return 'success';
    case 'Offline':
    case 'Outstanding':
      return 'secondary';
  }
}
