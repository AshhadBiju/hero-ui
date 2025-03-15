"use client";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

export default function App() {
  const {
    isOpen: isFirstOpen,
    onOpen: onFirstOpen,
    onOpenChange: onFirstOpenChange,
  } = useDisclosure();
  const {
    isOpen: isSecondOpen,
    onOpen: onSecondOpen,
    onOpenChange: onSecondOpenChange,
  } = useDisclosure();

  return (
    <>
      <Button onPress={onFirstOpen}>Open Modal</Button>

      {/* First Modal */}
      <Modal isOpen={isFirstOpen} onOpenChange={onFirstOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                First Modal
              </ModalHeader>
              <ModalBody>
                <p>Some content in the first modal.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    onSecondOpen();
                  }}
                >
                  Next
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Second Modal */}
      <Modal isOpen={isSecondOpen} onOpenChange={onSecondOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Second Modal
              </ModalHeader>
              <ModalBody>
                <p>This is the second modal.</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  variant="light"
                  onPress={() => {
                    onClose(); // Close second modal
                    onFirstOpen(); // Reopen first modal
                  }}
                >
                  Go Back
                </Button>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
