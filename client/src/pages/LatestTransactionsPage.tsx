import { type FC } from "react";
import { observer } from "mobx-react";
import { useTransactions } from "../queries/fetchTransactions";

const LatestTransactionsPage: FC = observer(() => {

  const { data, isLoading, error } = useTransactions();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading transactions</div>;
  if (!data) return <div>Empty!</div>

  return (
    <>
      <h1>Latest Transactions</h1>
      {data.data.map((transaction) => (
        <div>{transaction.name} {transaction.amount}</div>
      ))}
    </>
  );
});

export default LatestTransactionsPage;
