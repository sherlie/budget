import type { FC } from "react";
import { calculateGradient } from "./utils";

const mockBudget = [500, 300, 200, 100, 10, 1, 700];

const PieChart: FC = () => {
  const gradient = calculateGradient(mockBudget);

  return (
    <div
      style={{
        width: 200,
        height: 200,
        borderRadius: "50%",
        background: `conic-gradient(${gradient})`,
      }}
    />
  );
};

export default PieChart;
