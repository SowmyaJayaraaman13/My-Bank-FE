import React from "react";
import CategoryTable from "../common/Tables/CategoryTables";
import { financeCategories } from "../../data/data";
import { Button, useDisclosure } from "@nextui-org/react";
import { PiPlus } from "react-icons/pi";
import CategoryForm from "../common/Forms/CategoryForm";

function CategoryWrapper() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="h-[100vh-300px]">
      <div className="flex justify-between items-center h-9 mb-4">
        <p className="text-lg font-bold">Categories</p>
        <Button
          onPress={onOpen}
          color="primary"
          variant="light"
          startContent={<PiPlus />}
        >
          Add Categories
        </Button>
      </div>
      <CategoryTable categories={financeCategories} />
      <CategoryForm isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default CategoryWrapper;
