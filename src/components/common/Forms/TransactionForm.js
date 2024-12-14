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
  Avatar,
} from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function TransactionForm({
  isOpen,
  onOpenChange,
  financeCategories,
}) {
  const cardTypes = ["Visa", "Master Card", "RuPay", "Sodexo"];
  const formik = useFormik({
    initialValues: {
      purpose: "",
      description: "",
      amount: "",
      date: "",
      cardId: "",
      categoryId: "",
    },
    validationSchema: Yup.object().shape({
      purpose: Yup.string().required("Please enter a valid purpose"),
      description: Yup.string().optional(),
      amount: Yup.string().required("Please enter a valid amount"),
      date: Yup.string().required("Please enter a valid date"),
      cardId: Yup.string().required("Please Select a Card"),
      categoryId: Yup.string().required("Please Select a Category"),
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
                Create Transaction
              </ModalHeader>
              <ModalBody>
                <div>
                  <Input
                    type="text"
                    size="lg"
                    variant="bordered"
                    label="Purpose"
                    name="purpose"
                    labelPlacement="outside"
                    placeholder="Enter Your Purpose"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.purpose}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.purpose && formik.errors.purpose ? (
                    <p className="text-[#f31260]">{formik.errors.purpose}</p>
                  ) : null}
                </div>
                <div>
                  <Input
                    type="text"
                    size="lg"
                    variant="bordered"
                    label="Description"
                    name="description"
                    labelPlacement="outside"
                    placeholder="Describe your transaction"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <p className="text-[#f31260]">
                      {formik.errors.description}
                    </p>
                  ) : null}
                </div>
                <div className="flex w-full">
                  <div className="w-full mx-1">
                    <Input
                      type="number"
                      size="lg"
                      variant="bordered"
                      label="Amount"
                      name="amount"
                      labelPlacement="outside"
                      placeholder="Spend Amount"
                      radius="sm"
                      onChange={formik.handleChange}
                      value={formik.values.amount}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {formik.touched.amount && formik.errors.amount ? (
                      <p className="text-[#f31260]">{formik.errors.amount}</p>
                    ) : null}
                  </div>
                  <div className="w-full mx-1">
                    <Input
                      type="date"
                      size="lg"
                      variant="bordered"
                      label="Transaction Date"
                      name="date"
                      labelPlacement="outside"
                      placeholder="Describe your transaction"
                      radius="sm"
                      onChange={formik.handleChange}
                      value={formik.values.date}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {formik.touched.date && formik.errors.date ? (
                      <p className="text-[#f31260]">{formik.errors.date}</p>
                    ) : null}
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="w-full mx-1">
                    <Select
                      variant="bordered"
                      label="Card"
                      name="card"
                      labelPlacement="outside"
                      placeholder="Select a Card"
                      radius="sm"
                      onChange={formik.handleChange}
                      value={formik.values.cardId}
                      onBlur={formik.handleBlur}
                      required
                    >
                      {cardTypes.map((type) => (
                        <SelectItem key={type}>{type}</SelectItem>
                      ))}
                    </Select>
                    {formik.touched.cardId && formik.errors.cardId ? (
                      <p className="text-[#f31260]">{formik.errors.cardId}</p>
                    ) : null}
                  </div>
                  <div className="w-full mx-1">
                    <Select
                      variant="bordered"
                      label="Category"
                      name="category"
                      labelPlacement="outside"
                      placeholder="Select a Category"
                      radius="sm"
                      onChange={formik.handleChange}
                      value={formik.values.categoryId}
                      onBlur={formik.handleBlur}
                      required
                    >
                      {financeCategories.map((category) => (
                        <SelectItem key={category.name}>
                          <div className="flex gap-2 items-center">
                            <div>
                              {category.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-small">
                                {category.name}
                              </span>
                              <span className="text-tiny text-default-400">
                                {category.team}
                              </span>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </Select>
                    {formik.touched.categoryId && formik.errors.categoryId ? (
                      <p className="text-[#f31260]">
                        {formik.errors.categoryId}
                      </p>
                    ) : null}
                  </div>
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
