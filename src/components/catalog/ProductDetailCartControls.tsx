import { Product } from "@/util/types/types";
import { addItemToCart, toggleCartVisibility } from "@/redux/store/features/cartSlice";
import { useDispatch } from "react-redux";
import { FiPlus, FiMinus } from "react-icons/fi";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { toast } from "react-hot-toast";
import { useState } from "react";

interface Props {
  product: Product;
}

const ProductDetailCartControls: React.FC<Props> = ({ product }) => {

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity +1);
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart({
      product,
      quantity: quantity,
    }));
    toast.success(() => (
      <span className="flex items-center gap-2">
        Producto agregado al presupuesto
        <button
          onClick={() => dispatch(toggleCartVisibility())}
          className="bg-white px-2 py-1 rounded text-size-paragraph hover:underline"
        >
          Ver presupuesto
        </button>
      </span>
    ));
  };

  return (
    <>
      <div className="flex gap-10 items-center">
        <div className="flex flex-col">
          <span className="text-size-item">Cantidad</span>
          <span className="text-size-paragraph">{quantity} {quantity === 1 ? 'Unidad' : 'Unidades'}</span>
        </div>
        <div className="border border-cc-green rounded-[20px] text-size-subtle text-cc-very-dark-green px-3 flex items-center gap-4">
          <button onClick={decreaseQuantity} className="hover:text-cc-green text-size-item py-1 px-2">
            <FiMinus />
          </button>
          <span className="min-w-[60px] text-center">{quantity}</span>
          <button onClick={increaseQuantity} className="hover:text-cc-green text-size-item py-1 px-2">
            <FiPlus />
          </button>
        </div>
      </div>
      <button onClick={handleAddToCart} className="px-10 mt-10 py-2 rounded-lg bg-cc-green hover:bg-cc-light-green transition-colors duration-100 text-white"><span className="flex justify-center text-center">Agregar al presupuesto<TbShoppingCartQuestion className="text-2xl ms-3" /></span></button>
    </>
  )
}

export default ProductDetailCartControls;