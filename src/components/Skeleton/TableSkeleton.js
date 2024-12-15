import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Skeleton,
} from "@nextui-org/react";
import { transactions as allTransaction } from "../../data/data";

export default function TableSkeleton({ maxRows }) {
    const transactions = allTransaction.slice(0, maxRows)
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(transactions.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return transactions.slice(start, end);
  }, [page, transactions]);

  console.log("items =>", items);
  console.log("transactions =>", transactions);

  return (
    <Table
      aria-label="Example table with client side pagination"
      classNames={{
        base: "max-h-[calc(100vh-4rem-96px-140px)] overflow-y-scroll no-scrollbar",
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="description">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
        </TableColumn>
        <TableColumn key="transactionId">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
        </TableColumn>
        <TableColumn key="category">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
        </TableColumn>
        <TableColumn key="cardNumber">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
        </TableColumn>
        <TableColumn key="date">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
        </TableColumn>
        <TableColumn key="amount">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.transactionId}>
            {(columnKey) => (
              <TableCell className="py-4">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
