import React from "react";
import Button from "./Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 w-screen">
        <div className=" relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className="bg-dark/50  w-full h-full absolute z-50 inset-0"></div>
          <div className="bg-white  md:max-w-lg md:mx-auto p-6 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <div className="mb-6">
              <div className="">
                <h3 className="font-bold capitalize mb-4"> {title}</h3>
                {children}
              </div>
            </div>
            <div className="text-center md:text-right ">
              <Button
                variant="dark"
                className="px-4 py-3 md:py-2 text-sm "
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
