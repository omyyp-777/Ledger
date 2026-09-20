export function formatDate(value, options = { month: "short", day: "numeric" }) {
  return new Intl.DateTimeFormat("en", options).format(new Date(value));
}
export function formatTime(value) {
  return new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit" }).format(new Date(value));
}
export function monthLabel(value) {
  return new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(new Date(value));
}
