import { Product } from "@/lib/redux/slices/productSlice/type";
import { FunctionComponent } from "react";

interface DescriptionProps {
  productDetail: Product
}

const Description: FunctionComponent<DescriptionProps> = ({
  productDetail
}) => {
  const { thumbnail, description, title } = productDetail

  return (
    <section role="description" className="flex lg:flex-row flex-col">
      <div className="lg:w-3/5 w-full">
        <p className="font-bold">{title}</p>
        {description}
      </div>
      <div className="w-auto lg:w-2/5">
        <img className="w-full aspect-square rounded" src={thumbnail} />
      </div>
    </section>
  );
}

export default Description;