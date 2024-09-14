import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";

function QuickDetails() {
  const accountSummaryDetails = [
    {
      name: "My Balace",
      value: "$12,750",
      ImgPath: "/images/balance.png",
    },
    {
      name: "Income",
      value: "$5,600",
      ImgPath: "/images/income.png",
    },
    {
      name: "Expense",
      value: "$3,460",
      ImgPath: "/images/expense.png",
    },
    {
      name: "Saving",
      value: "$7,920",
      ImgPath: "/images/savings.png",
    },
  ];
  return (
    <div className="flex justify-between flex-wrap">
      {accountSummaryDetails.map((details) => (
        <Card className="lg:w-[18%] md:w-[18%] w-full m-2 p-3 h-20">
          <div className="flex justify-center items-center">
            <div className="w-[50px] h-[50px]">
              <img
                src={details.ImgPath}
                alt="icons"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="pl-5">
              <p className="text-xs text-gray-500">{details.name}</p>
              <p className="text-lg font-bold">{details.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default QuickDetails;
