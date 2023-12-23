import { FunctionComponent, useState } from "react";

interface ProductImagesProps {
  thumbnail: string,
  images: string[]
}

const ProductImages: FunctionComponent<ProductImagesProps> = ({
  thumbnail, images
}) => {
  const [selectedImage, setSelectedImage] = useState(thumbnail)

  return (
    <div>
      <img className="w-full aspect-square" src={selectedImage} />
      <div className="gap-2 columns-5 my-4">
        { images.map(img => 
          <img key={img} 
            onMouseOver={() => setSelectedImage(img)} 
            onClick={() => setSelectedImage(img)} 
            className="w-full aspect-square cursor-pointer" 
            src={img} />
        )}
      </div>
    </div>
  );
}

export default ProductImages;