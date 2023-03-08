export function determineColor(value: number) {
  if (value <= 25) {
    return "red";
  }

  if (value >= 50) {
    return "green";
  }

  return "yellow";
}
