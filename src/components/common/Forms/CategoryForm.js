import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Card,
  CardHeader,
} from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { CategoryService } from "../../../services/categories";

export default function CategoryForm({ isOpen, onOpenChange }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      label: "",
      icon: "",
      description: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Please enter a valid Name"),
      label: Yup.string().required("Please enter a valid Label name"),
      icon: Yup.string().optional(),
      description: Yup.string().optional(),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await CategoryService.createCategory(values);
      console.log(response);
      resetForm();
    },
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [icons, setIcons] = useState([]);

  const searchIcons = async () => {
    try {
      const response = await fetch(
        `https://api.iconify.design/search?query=${searchQuery}`
      );
      const data = await response.json();
      setIcons(data.icons || []);
    } catch (error) {
      console.error("Error fetching icons:", error);
    }
  };

  useEffect(() => {
    if (searchQuery !== "") {
      searchIcons();
    } else {
      setIcons([]);
    }
  }, [searchQuery]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={formik.handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Create Category
              </ModalHeader>
              <ModalBody>
                <div style={{ position: "relative" }}>
                  <Input
                    type="text"
                    size="lg"
                    variant="bordered"
                    label="Search For Icon"
                    name="icon"
                    labelPlacement="outside"
                    placeholder="Search For Icon"
                    radius="sm"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      width: "100%",
                      maxHeight: "150px",
                      display: "flex",
                      justifyContent: "space-evenly",
                      flexWrap: "wrap",
                      backgroundColor: "white",
                      overflowY: "auto",
                      zIndex: "10000",
                    }}
                  >
                    {icons.map((icon) => (
                      <Card
                        key={icon}
                        className="m-2 box-border"
                        isPressable
                        onPress={() => {
                          console.log(icon)
                          formik.setFieldValue(
                            "icon",
                            icon
                          );
                          setIcons([]);
                        }}
                      >
                        <CardHeader>
                          <Icon icon={icon} width="32" height="32" />
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
                {/* <IconSearch onIconSelect={handleIconSelect} /> */}
                <div>
                  <Input
                    type="text"
                    size="lg"
                    variant="bordered"
                    label="Category Name"
                    name="name"
                    labelPlacement="outside"
                    placeholder="Enter Category"
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
                    type="text"
                    size="lg"
                    variant="bordered"
                    label="Category Label"
                    name="label"
                    labelPlacement="outside"
                    placeholder="Enter Label"
                    radius="sm"
                    onChange={formik.handleChange}
                    value={formik.values.label}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.label && formik.errors.label ? (
                    <p className="text-[#f31260]">{formik.errors.label}</p>
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
                    placeholder="Enter Description"
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
