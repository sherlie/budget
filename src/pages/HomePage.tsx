import type { FC } from "react";
import PieChart from "../components/pieChart/PieChart";

const HomePage: FC = () => {
  return (
    <>
      <h1>My Budget</h1>
      <PieChart />
    </>
  );
};

export default HomePage;
