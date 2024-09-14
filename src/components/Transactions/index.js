import React from "react";
import QuickDetails from "./QuickDetails";
import TransactionTabs from "./TransactionTabs";
import { Button } from "@nextui-org/react";

function TransactionWrapper() {
  return (
    <div className="w-full">
      <QuickDetails />
      <div className="pt-5 box-border">
        <div className="flex justify-between">
        <p className="text-lg font-bold">Transactions</p>
        <Button color="primary">Add Transaction</Button>
        </div>
        <TransactionTabs />
      </div>
    </div>
  );
}

export default TransactionWrapper;
