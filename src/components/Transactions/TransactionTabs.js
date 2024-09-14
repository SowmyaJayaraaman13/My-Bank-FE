import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import TransactionTables from "../common/Tables/TransactionTables";
import { transactions } from "../../data/data";

export default function TransactionTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs variant="underlined" color="primary">
        <Tab key="all_transactions" title="All Transactions">
          <TransactionTables transactions={transactions} showAll />
        </Tab>
        <Tab key="income" title="Income">
          <TransactionTables transactions={transactions.filter(item => item.type === 'credit')} />
        </Tab>
        <Tab key="expense" title="Expense">
          <TransactionTables transactions={transactions.filter(item => item.type === 'debit')} />
        </Tab>
      </Tabs>
    </div>
  );
}
