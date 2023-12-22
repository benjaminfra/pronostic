export function addToAccumulator<T>(
  acc: { [date: string]: T[] },
  date: string,
  match: T
) {
  if (!acc[date]) {
    acc[date] = [match];
  } else {
    acc[date].push(match);
  }
}
