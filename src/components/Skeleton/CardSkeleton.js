import {
  Card,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import React from "react";

function CardSkeleton() {
  return (
    <Card
      className={` snap-start flex-shrink-0  lg:w-[30%] md:w-[30%] w-full mb-2 2xl:h-[220px]`}
    >
      <div className="flex justify-between items-center my-2 px-5 box-border">
        <Skeleton className="h-5 w-2/5 rounded-lg" />
        <Skeleton className="h-8 w-10 rounded-lg" />
      </div>
      <div className="flex justify-between items-center my-5 px-5 box-border">
        <Skeleton className="h-5 w-2/5 rounded-lg" />
        <Skeleton className="h-5 w-2/5 rounded-lg" />
      </div>
      <Divider className="2xl:mt-[2rem]" />
      <div className="flex justify-between items-center my-2 px-5 box-border">
        <Skeleton className="h-5 w-3/5 rounded-lg" />
        <Skeleton className="h-8 w-10 rounded-lg" />
      </div>
    </Card>
  );
}

export default CardSkeleton;
