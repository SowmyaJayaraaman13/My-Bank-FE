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
 Card,
 CardHeader
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function CategoryTable({categories, showAll = false}) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(categories.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return categories.slice(start, end);
  }, [page, categories]);

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
    >
      <TableHeader>
        <TableColumn key="icon">Icon</TableColumn>
        <TableColumn key="name">Name</TableColumn>
        <TableColumn key="label">Label</TableColumn>
        <TableColumn key="description">Description</TableColumn>
        <TableColumn key="amount">Action</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>
                {
                  columnKey === 'icon' ? 
                  <Card
                        key={item.icon}
                        className="p-2 box-border w-max"
                      >
                       <Icon icon={item.icon} width="16" height="16p" />
                      </Card> :
                  <p>{getKeyValue(item, columnKey)}</p> 
                }          
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
