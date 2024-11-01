import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CardForm({ isOpen, onOpenChange }) {
  const cardTypes = ["Visa", "Master Card", "RuPay", "Sodexo"];
  const formik = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      cardType: "",
      expiryDate: "",
      openingBalance: "",
    },
    validationSchema: Yup.object().shape({
      cardName: Yup.string().required("Please enter a valid card name"),
      cardNumber: Yup.string().required("Please enter a valid card number"),
      cardType: Yup.string().required("Please enter a valid card type"),
      expiryDate: Yup.string().required("Please enter a valid date of expiry"),
      openingBalance: Yup.string().required(
        "Please enter a valid opening balance"
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Values =>", values);
      resetForm();
    },
  });
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={formik.handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Create Card
              </ModalHeader>
              <ModalBody>
                <div>
                  <Input
                    type="text"
                    size="lg"
                    variant="bordered"
                    label="Name On card"
                    name="cardName"
                    labelPlacement="outside"
                    placeholder="Enter Your Name On Card"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.cardName}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.cardName && formik.errors.cardName ? (
                    <p className="text-[#f31260]">{formik.errors.cardName}</p>
                  ) : null}
                </div>
                <div>
                  <Input
                    type="number"
                    size="lg"
                    variant="bordered"
                    label="Card Number"
                    name="cardNumber"
                    labelPlacement="outside"
                    placeholder="Enter Your Card Number"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.cardNumber}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.cardNumber && formik.errors.cardNumber ? (
                    <p className="text-[#f31260]">{formik.errors.cardNumber}</p>
                  ) : null}
                </div>
                <div>
                  <Select
                    variant="bordered"
                    label="Card Type"
                    name="cardType"
                    labelPlacement="outside"
                    placeholder="Enter Your Name On Card"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.cardType}
                    onBlur={formik.handleBlur}
                  >
                    {cardTypes.map((type) => (
                      <SelectItem key={type}>{type}</SelectItem>
                    ))}
                  </Select>
                  {formik.touched.cardType && formik.errors.cardType ? (
                    <p className="text-[#f31260]">{formik.errors.cardType}</p>
                  ) : null}
                </div>
                <div>
                  <Input
                    type="date"
                    size="lg"
                    variant="bordered"
                    label="Expiration Date"
                    name="expiryDate"
                    labelPlacement="outside"
                    placeholder="Enter Your Expiration Date"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.expiryDate}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.expiryDate && formik.errors.expiryDate ? (
                    <p className="text-[#f31260]">{formik.errors.expiryDate}</p>
                  ) : null}
                </div>
                <div>
                  <Input
                    type="number"
                    size="lg"
                    variant="bordered"
                    label="Opening Balance"
                    name="openingBalance"
                    labelPlacement="outside"
                    placeholder="Enter Your Opening Balance"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.openingBalance}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.openingBalance &&
                  formik.errors.openingBalance ? (
                    <p className="text-[#f31260]">
                      {formik.errors.openingBalance}
                    </p>
                  ) : null}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Create
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
