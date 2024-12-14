import React from "react";
import QuickDetails from "./QuickDetails";
import TransactionTabs from "./TransactionTabs";
import { Button, useDisclosure } from "@nextui-org/react";
import TransactionForm from "../common/Forms/TransactionForm";
import { financeCategories} from "../../data/data"

function TransactionWrapper() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full">
      <QuickDetails />
      <div className="pt-5 box-border">
        <div className="flex justify-between">
        <p className="text-lg font-bold">Transactions</p>
        <Button color="primary" onPress={onOpen}>Add Transaction</Button>
        </div>
        <TransactionTabs />
      </div>
      <TransactionForm isOpen={isOpen} onOpenChange={onOpenChange} financeCategories={financeCategories} />
    </div>
  );
}

export default TransactionWrapper;
