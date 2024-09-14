import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Chip,
} from "@nextui-org/react";
import { getRandomArbitrary } from "../../../utils/transforms";

export default function TransactionTables({transactions, showAll = false}) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(transactions.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return transactions.slice(start, end);
  }, [page, transactions]);

  const color = ['primary', 'secondary', 'success', 'default', 'warning'];
  const getClassNameForAmount = (column, type) => {
    if(column !== 'amount') return ''
    if(type === 'debit') {
      return 'text-[#f31260]'
    } else {
      return 'text-[#16DBAA]'
    }
  }

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-end">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="description">Description</TableColumn>
        <TableColumn key="transactionId">Transaction ID</TableColumn>
        <TableColumn key="category">Category</TableColumn>
        <TableColumn key="cardNumber">Card Number</TableColumn>
        <TableColumn key="date">Date</TableColumn>
        <TableColumn key="amount">Amount</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.transactionId}>
            {(columnKey) => (
              <TableCell>
                {console.log(getRandomArbitrary(0, color.length))}
                {columnKey === 'category' ? <Chip color={color[getRandomArbitrary(0, color.length)]}>{getKeyValue(item, columnKey)}</Chip> : <p className={getClassNameForAmount(columnKey, item.type)}>{getKeyValue(item, columnKey)}</p>}
                </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
