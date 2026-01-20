"use client";

import { X } from "lucide-react";
import ModalDetailsImageArea from "./ModalDetailsImageArea";
import DetailsArea from "./ModalRightDetailsArea";

interface CarViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCar: {
    id: string;
    name: string;
    status: string;
    vehicleType: string;
    pickup: string;
    return: string;
    image: string;
  };
}

export default function CarViewModal({ isOpen, onClose }: CarViewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full mx-4 p-6 relative max-h-[90vh] flex flex-col overflow-hidden">
        {/* Close button outside the modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-20 bg-gray-200 hover:bg-gray-300 transform transition rounded-full p-2 shadow-md cursor-pointer"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col gap-[30px] lg:gap-3 overflow-y-auto flex-1 modal-scroll">
          {/* Image Area */}
          <div className="w-full">
            <ModalDetailsImageArea />
          </div>

          {/* Details Area */}
          <div className="w-full">
            <DetailsArea />
          </div>
        </div>
      </div>
    </div>
  );
}
