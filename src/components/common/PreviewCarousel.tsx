import React, { useState, useEffect, useRef } from 'react';
import { Images } from "@/util/types/types";
import { FaChevronLeft, FaXmark } from "react-icons/fa6";

interface PreviewCarouselProps {
  images: Images[];
  isModalOpen: boolean;
  currentImageIndex: number,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const PreviewCarousel: React.FC<PreviewCarouselProps> = ({
  images,
  setIndex,
  currentImageIndex,
  isModalOpen,
  setModalOpen,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(()=> {
    if(dialogRef.current?.open && !isModalOpen){
      dialogRef.current.close();
      document.body.classList.remove('overflow-hidden');
    } else if (!dialogRef.current?.open && isModalOpen){
      dialogRef.current?.showModal()
      document.body.classList.add('overflow-hidden');
    }
  }, [isModalOpen])

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isModalOpen]);

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  return (
    <dialog ref={dialogRef}>

        <div
          className="fixed inset-0 z-[9999] bg-black/80 flex justify-center items-center"
          onClick={closeModal}
        >
          <button
            className="absolute top-8 right-8 bg-black/60 p-3 rounded-full text-white"
            onClick={() => setModalOpen(false)}
          >
            <FaXmark className='text-size-item' />
          </button>

          <div className="absolute top-8 left-8 bg-black/60 p-3 px-5 text-lg text-white rounded-lg">
            {currentImageIndex + 1} / {images.length}
          </div>

          <div className="max-w-[1200px] bg-white rounded p-2">
            <img
              className="w-full max-h-[800px] object-contain"
              src={`${images[currentImageIndex].url}` || './assets/img/placeholder.webp'}
              alt="Imagen completa"
            />
          </div>

          <button
            onClick={prevImage}
            className="absolute left-12 bg-black/60 p-3 rounded-full text-white text-2xl"
          >
            <FaChevronLeft className='text-size-item' />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-12 bg-black/60 p-3 rounded-full text-white text-2xl"
          >
            <FaChevronLeft className='text-size-item rotate-180' />
          </button>
        </div>

    </dialog>
  );
};

export default PreviewCarousel;
