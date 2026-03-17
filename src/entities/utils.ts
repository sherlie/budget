export const COLORS = ["#371064", "#074272", "#FFC107", "#c66006"];

export function calculateGradient(budget: number[]) {
  const total = budget.reduce((a, b) => a + b, 0);

  let current = 0;

  const gradient = budget
    .map((value, i) => {
      const percent = (value / total) * 100;
      const start = current;
      const end = current + percent;
      current = end;

      return `${COLORS[i % COLORS.length]} ${start}% ${end}%`;
    })
    .join(", ");
  return gradient;
}
