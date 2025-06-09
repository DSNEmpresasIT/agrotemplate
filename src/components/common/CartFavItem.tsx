import { FaTrash } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

interface Props {
  product: any
}

const CartFavItem = ({ product }: Props) => {
  return (
    <div className="flex justify-between py-[22px] px-[14px] relative before:absolute before:bottom-0 before:w-[80%] before:left-[50%] before:translate-x-[-50%] before:h-[1px] before:bg-[#B5271026]/15">
      <div className="flex gap-3">
        <img src="" alt="" className="object-contain min-w-[71px] aspect-square bg-[#DCDCDC] rounded-[5px]"/>
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-medium overflow-hidden truncate text-ellipsis">{product.title}</h4>
          <p className="text-lg">{product.category}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button aria-label="Carrito" className="text-4xl text-[#B52710]"><FaCartPlus/></button>
        <button aria-label="Eliminar" className="ms-6 text-[#195984]/60 text-2xl"><FaTrash/></button>
      </div>
    </div>
  )
}

export default CartFavItem;