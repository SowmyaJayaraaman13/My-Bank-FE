import React, { useEffect, useState } from "react";
import CategoryTable from "../common/Tables/CategoryTables";
import { Button, useDisclosure } from "@nextui-org/react";
import { PiPlus } from "react-icons/pi";
import CategoryForm from "../common/Forms/CategoryForm";
import { CategoryService } from "../../services/categories";
import NoData from "../No Data";
import TableSkeleton from "../Skeleton/TableSkeleton";

function CategoryWrapper() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isFetchingCategory, setIsFetchingCategory] = useState(true);
  const [financeCategories, setFinanceCategories] = useState([]);
  const noData = {
    title: "",
    description: "Categories simplify tracking spending and income.",
    image: "checklist.gif",
  };
  const getAllCategories = async () => {
    setIsFetchingCategory(true);
    const { data } = await CategoryService.getAllCategories();
    setFinanceCategories(data);
    setIsFetchingCategory(false);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      {!isFetchingCategory ? (
        <div className="h-[100vh-300px]">
          {financeCategories.length ? (
            <>
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
            </>
          ) : (
            <NoData {...noData}>
              <Button
                onPress={onOpen}
                color="primary"
                startContent={<PiPlus />}
              >
                Create Categories
              </Button>
            </NoData>
          )}
        </div>
      ) : (
        <TableSkeleton maxRows={7} />
      )}
      <CategoryForm isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

export default CategoryWrapper;
