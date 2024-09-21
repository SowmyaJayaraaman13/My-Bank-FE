import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";

export default function CardForm({ isOpen, onOpenChange }) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Card
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  size="lg"
                  variant="bordered"
                  label="Name On card"
                  labelPlacement="outside"
                  placeholder="Enter Your Name On Card"
                  radius="sm"
                />
                <Input
                  type="number"
                  size="lg"
                  variant="bordered"
                  label="Card Number"
                  labelPlacement="outside"
                  placeholder="Enter Your Card Number"
                  radius="sm"
                />
                <Input
                  type="date"
                  size="lg"
                  variant="bordered"
                  label="Expiration Date"
                  labelPlacement="outside"
                  placeholder="Enter Your Expiration Date"
                  radius="sm"
                />
                <Input
                  type="number"
                  size="lg"
                  variant="bordered"
                  label="Opening Balance"
                  labelPlacement="outside"
                  placeholder="Enter Your Opening Balance"
                  radius="sm"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
