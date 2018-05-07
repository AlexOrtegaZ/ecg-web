import moment from 'moment'

export function formatDate (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY');
  }
}

export function formatTime (value) {
  if (value) {
    return moment(String(value)).format('hh:mm a');
  }
}
