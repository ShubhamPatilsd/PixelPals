export function determineColor(value: number) {
  if (value <= 50) {
    return "red";
  }

  if (value >= 75) {
    return "green";
  }

  return "yellow";
}
