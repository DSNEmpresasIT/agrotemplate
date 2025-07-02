import { Images } from "@/util/types/types";
import PreviewCarousel from "../common/PreviewCarousel";
import { useState } from "react";

interface Props {
  images: Images[];
}

const ProductDetailImages: React.FC<Props> = ({ images }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const openDialog = (index: number) => {
    setModalOpen(true);
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3">
        {
          images && images?.length <= 6 && (
            images?.map((image: any, index: number) => (
              <button 
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                onMouseEnter={() => setCurrentImageIndex(index)}
                className={`${index === currentImageIndex ? 'ring-cc-light-green ring-2' : 'ring-gray-400 ring-1'} hover:ring-cc-light-green hover:ring-2 aspect-square h-[56px] p-1 bg-white rounded`}
              >
                <img src={image.url || '/assets/images/placeholder.png'} alt={`Imagen ${currentImageIndex + 1}`} />
              </button>
            ))
          )
        }
        {
          images && images?.length > 6 && (
            <>
              {
                images.slice(0, 5).map((image: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    onMouseEnter={() => setCurrentImageIndex(index)}
                    className={`${index === currentImageIndex ? 'ring-cc-light-green ring-2' : 'ring-gray-400 ring-1'} hover:ring-cc-light-green hover:ring-2 aspect-square h-[56px] p-1 bg-white rounded`}
                  >
                    <img src={image.url || '/assets/images/placeholder.png'} alt={`Imagen ${currentImageIndex + 1}`} />
                  </button>
                ))
              }
              <button
                onClick={() => openDialog(5)}
                className={`${currentImageIndex > 4 ? 'ring-cc-light-green ring-2' : 'ring-1 ring-gray-400'} hover:ring-cc-light-green hover:ring-2 overflow-hidden aspect-square h-[56px] p-1 bg-white rounded relative`}
              >
                <div className="absolute inset-0 bg-white/80 text-cc-green font-medium text-size-subtle leading-none flex items-center justify-center">+{images.length - 5}</div>
                <img src={images[5].url || '/assets/images/placeholder.png'} alt={`Imagen ${currentImageIndex + 1}`} />
              </button>
            </>
          )
        }
      </div>
      <div onClick={() => openDialog(currentImageIndex)} className="h-[396px] w-full hover:cursor-zoom-in">
        <img src={images ? images[currentImageIndex].url : '/assets/images/placeholder.png'} alt="" className="w-full h-full object-contain" />
      </div>
      <PreviewCarousel
        images={images!}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        setIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
      />
    </div>
  )
}

export default ProductDetailImages;