import { Card, CardHeader, Chip, Image } from "@nextui-org/react";
import React from "react";

function TransactionList({ latestTransations }) {
  return (
    <Card className="p-2">
      {latestTransations.map((transaction) => (
        <CardHeader className="flex justify-between items-center">
          <div className="lg:w-[40%] md:w-[40%] w-full flex items-center">
            <Image src={transaction.type==='debit' ? "images/expense.png" : "images/income.png"} width={50} height={50} />
            <div className="ml-3">
              <p>{transaction.description}</p>
              <p className="font-light text-tiny">{transaction.date}</p>
            </div>
          </div>
          <Chip variant="flat" color="primary" className="hidden lg:flex md:flex"> {transaction.category} </Chip>
          <p className="hidden lg:block md:block"> {transaction.cardNumber} </p>
          <p> {transaction.amount}</p>
        </CardHeader>
      ))}
    </Card>
  );
}

export default TransactionList;
