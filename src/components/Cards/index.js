import React, { useEffect, useState } from "react";
import BasicCard from "../common/Card/Card";
import AddCard from "../common/Card/AddCard";
import { Button, useDisclosure } from "@nextui-org/react";
import CardForm from "../common/Forms/CardForm";
import { PiPlus } from "react-icons/pi";
import PieChartExample from "../Charts/Pie";
import TransactionList from "../Transactions/TransactionList";
import { transactions } from '../../data/data'
import ExpenseStats from "./ExpenseStats";
import { CardService } from "../../services/card";
import TableSkeleton from "../Skeleton/TableSkeleton";
import CardSkeleton from "../Skeleton/CardSkeleton";

function CardWrapper() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const latestTransations = transactions.slice(0,4)
  const [isFetchingCards, setFetchingCards] = useState(true)
  const [cardData, setCardData] = useState([])

  const getAllCards = async () => {
    setFetchingCards(true)
    const { data } = await CardService.getAllCards();
    setCardData(data)
    setFetchingCards(false)
  }

  useEffect(() => {
    getAllCards();
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center h-9">
        <p className="text-lg font-bold">Cards</p>
        <Button
          onPress={onOpen}
          color="primary"
          variant="light"
          startContent={<PiPlus />}
        >
          Add Card
        </Button>
      </div>
      <div className="flex justify-between overflow-x-auto snap-x snap-mandatory mb-5 p-1 bg-transparent">
        {
          !isFetchingCards ? cardData && cardData.length ? cardData.map((data, index) => {
            const params = {...data, primary: index % 2 === 0}
            return <BasicCard {...params} />
          }) : null
          :
          new Array(3).fill(1).map(() => {
            return <CardSkeleton />
          })
        }
        <CardForm isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
      <div className="flex justify-between mb-3 h-[50vh] flex-wrap">
        <ExpenseStats />
        <div className="w-full lg:w-[70%] md:w-[70%] h-[50vh] mt-5">
          <p className="text-lg font-bold mb-3">Latest Transaction</p>
          {/* <TransactionList latestTransations={latestTransations} /> */}
          <TableSkeleton maxRows={5} />
        </div>
      </div>
    </div>
  );
}

export default CardWrapper;
