export function formatLongDate(dateOrStr: Date | string) {
  const date = new Date(dateOrStr);
  const formatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });
  return formatter.format(date);
}
