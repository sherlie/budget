import { type FC, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useTransactions } from '../queries/useTransactions';

const LatestTransactionsPage: FC = observer(() => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useTransactions();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (first.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    const currentRef = loadMoreRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading transactions</div>;

  return (
    <>
      <h1>Latest Transactions</h1>

      {data?.pages.map((page) =>
        page.data.map((transaction) => (
          <div key={transaction.id} style={{ padding: "2rem" }}>
            {transaction.name} {transaction.amount}
          </div>
        ))
      )}

      <div ref={loadMoreRef} style={{ height: 20 }} />

      {isFetchingNextPage && <div>Loading more...</div>}
      {!hasNextPage && <div>End of transactions page</div>}
    </>
  );
});

export default LatestTransactionsPage;
