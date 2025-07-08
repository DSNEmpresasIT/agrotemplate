import { toggleCartVisibility } from "@/redux/store/features/cartSlice";
import { CUSTOMPATHS } from "@/util/enums";
import { usePathname } from "next/navigation";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Category } from "@/util/types/types";
import Link from "next/link";

interface Props {
  categories: any
}

const NavbarDesktopManu: React.FC<Props> = ({categories}) => {

  const dispatch = useDispatch()
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  
  return (
    <ul className="flex items-ceter gap-7 text-white">
      <li className="flex">
        <Link href={`/`} className={`${isActive('/') ? 'border-white' : 'border-transparent'} p-1 h-full flex items-center border-b`}>
          Inicio
        </Link>
      </li>
      <li className="relative group flex">
        {/* @ts-ignore */}
        <Link href={`${CUSTOMPATHS.CATALOG}`} className={`${pathname.startsWith(CUSTOMPATHS.CATALOG) ? 'border-white' : 'border-transparent'} p-1 h-full flex items-center border-b`}>
          Catálogo
        </Link>
        {/* @ts-ignore */}
        <div className="hidden group-hover:flex absolute top-[100%] left-0 min-w-[250px] pt-5">
          <ul className="bg-white rounded-2xl w-full py-3 overflow-hidden">
            {categories && categories.map((category: Category, index: number) => (
              <li key={index} className="flex">
                <Link href={`${CUSTOMPATHS.CATALOG}/${category.slug}`} className={`w-full text-cc-green hover:bg-cc-light-green hover:text-white py-2 px-3 ${isActive(CUSTOMPATHS.CATALOG + `/${category.slug}`) && 'bg-cc-light-green text-white'}`}>
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li className="flex">
        <Link href={`${CUSTOMPATHS.GALLERY}`} className={`${isActive(CUSTOMPATHS.GALLERY) ? 'border-white' : 'border-transparent'} p-1 h-full flex items-center border-b`}>
          Galería
        </Link>
      </li>
      <li className="flex">
        <Link href={`${CUSTOMPATHS.CONTACT}`} className={`${isActive(`${CUSTOMPATHS.CONTACT}`) ? 'border-white' : 'border-transparent'} p-1 h-full flex items-center border-b`}>
          Sobre nosotros
        </Link>
      </li>
      <li>
        <button onClick={() => {dispatch(toggleCartVisibility())}} className="bg-[#8AAE2D] py-2 px-3 rounded md:py-1 flex items-center gap-1">
          <span>Mi presupuesto</span>
          <TbShoppingCartQuestion className=""/>
        </button>
      </li>
    </ul>
  )
}

export default NavbarDesktopManu;