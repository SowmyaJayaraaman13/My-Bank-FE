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
import { CardService } from "../../../services/card";

export default function CardForm({ isOpen, onOpenChange }) {
  const cardTypes = ["Visa", "Master Card", "RuPay", "Sodexo"];
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      type: "",
      expDate: "",
      balance: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Please enter a valid card name"),
      number: Yup.string().required("Please enter a valid card number"),
      type: Yup.string().required("Please enter a valid card type"),
      expDate: Yup.string().required("Please enter a valid date of expiry"),
      balance: Yup.string().required(
        "Please enter a valid opening balance"
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Values =>", values);
      const response = await CardService.createCard(values)
      console.log('Response =>', response);
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
                    name="name"
                    labelPlacement="outside"
                    placeholder="Enter Your Name On Card"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <p className="text-[#f31260]">{formik.errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <Input
                    type="number"
                    size="lg"
                    variant="bordered"
                    label="Card Number"
                    name="number"
                    labelPlacement="outside"
                    placeholder="Enter Your Card Number"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.number && formik.errors.number ? (
                    <p className="text-[#f31260]">{formik.errors.number}</p>
                  ) : null}
                </div>
                <div>
                  <Select
                    variant="bordered"
                    label="Card Type"
                    name="type"
                    labelPlacement="outside"
                    placeholder="Enter Your Name On Card"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                    onBlur={formik.handleBlur}
                  >
                    {cardTypes.map((type) => (
                      <SelectItem key={type}>{type}</SelectItem>
                    ))}
                  </Select>
                  {formik.touched.type && formik.errors.type ? (
                    <p className="text-[#f31260]">{formik.errors.type}</p>
                  ) : null}
                </div>
                <div>
                  <Input
                    type="date"
                    size="lg"
                    variant="bordered"
                    label="Expiration Date"
                    name="expDate"
                    labelPlacement="outside"
                    placeholder="Enter Your Expiration Date"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.expDate}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.expDate && formik.errors.expDate ? (
                    <p className="text-[#f31260]">{formik.errors.expDate}</p>
                  ) : null}
                </div>
                <div>
                  <Input
                    type="number"
                    size="lg"
                    variant="bordered"
                    label="Opening Balance"
                    name="balance"
                    labelPlacement="outside"
                    placeholder="Enter Your Opening Balance"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.balance}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.balance &&
                  formik.errors.balance ? (
                    <p className="text-[#f31260]">
                      {formik.errors.balance}
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
