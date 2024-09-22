import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import React from "react";

function BasicCard({ type }) {
  return (
    <Card className={`${type === 'primary' ? 'card_gradiant text-white' : ''} snap-start flex-shrink-0  lg:w-[30%] md:w-[30%] w-full mb-2 h-[180px]`}>
      <CardHeader className="flex justify-between">
        <div>
          <p className="font-thin text-tiny">Balance</p>
          <p className="font-medium">5,00,000</p>
        </div>
        <div>
          <Image src={type === 'primary' ? 'images/Chip_Card.png' : 'images/Chip_Card_1.png'} width="35" height="35" />
        </div>
      </CardHeader>
      <div className="flex justify-between w-[80%] pl-3 py-2">
        <div>
          <p className="font-thin uppercase text-tiny">Card Holder</p>
          <p className="font-medium">Will Smith</p>
        </div>
        <div>
          <p className="font-thin uppercase text-tiny">Valdity</p>
          <p className="font-medium">04/2001</p>
        </div>
      </div>
      <Divider/>
      <CardFooter className="flex justify-between">
        <div>
          <p className="font-bold text-lg">3212 **** **** 1234</p>
        </div>
        <div>
        <Image src={type === 'primary' ? 'images/master_card.png' : 'images/master_card_1.png'} width="35" height="35" />
        </div>
      </CardFooter>
    </Card>
  );
}

export default BasicCard;
