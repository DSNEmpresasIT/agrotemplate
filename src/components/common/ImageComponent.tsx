'use client';
import Image from 'next/image';
import { config } from 'process';
import { useState } from 'react';

interface config {
  width: number;
  height: number;
  class: string;
}
const ImageComponent = ({ image, config }: { image: any, config?: config }) => {
  const [imgError, setImgError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!imgError) {
      setImgError(true);
      e.currentTarget.src = '/assets/images/placeholder.png';
    }
  };
  return (
    <Image
      src={imgError || !Array.isArray(image?.images) || image?.images?.length === 0
        ? '/assets/images/placeholder.png'
        : image?.images[0]?.url}
      alt={image?.name || image?.title || image?.name || 'placeholder'}
      title={image?.name || image?.title || image?.name}
      width={config?.width || 50}
      height={config?.width || 50}
      className={config?.class || 'rounded-md'}
      onError={handleError}
    />
  );
};

export default ImageComponent;