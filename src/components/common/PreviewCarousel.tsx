import { useEffect, useRef } from 'react';

interface PreviewCarouselProps {
  images: { url: string }[];
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
      dialogRef.current.close()
    } else if (!dialogRef.current?.open && isModalOpen){
      dialogRef.current?.showModal()
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
          className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-center"
          onClick={closeModal}
        >
          <button
            className="absolute top-8 right-8 bg-black/60 p-3 px-5 text-white"
            onClick={() => setModalOpen(false)}
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>

          <div className="absolute top-8 left-8 bg-black/60 p-3 px-5 text-lg text-white rounded-lg">
            {currentImageIndex + 1} / {images.length}
          </div>

          <div className="max-w-[1200px] bg-white rounded-lg p-2">
            <img
              className="w-full   max-h-[800px] object-contain"
              src={`${images[currentImageIndex]?.url}` || './assets/img/placeholder.webp'}
              alt="Imagen completa"
            />
          </div>

          <button
            onClick={prevImage}
            className="absolute left-12 bg-black/60 p-3 px-5 text-white text-2xl"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-12 bg-black/60 p-3 px-5 text-white text-2xl"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

    </dialog>
  );
};

export default PreviewCarousel;
