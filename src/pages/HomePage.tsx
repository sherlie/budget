import type { FC } from "react";
import PieChart from "../entities/pieChart/PieChart";

const HomePage: FC = () => {
  return (
    <>
      <h1>My Budget</h1>
      <PieChart />
    </>
  );
};

export default HomePage;
