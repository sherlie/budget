import type { FC } from "react";
import PieChart from "../components/pieChart/PieChart";
import { useTransactionsStats } from "../queries/useCategoriesStats";

const HomePage: FC = () => {
  const { data } = useTransactionsStats({
    cadence: "month",
    from: "2026-04-01",
    until: "2026-04-30",
  });
  console.log(data);
  return (
    <>
      <h1>My Budget</h1>
      <PieChart />
    </>
  );
};

export default HomePage;
