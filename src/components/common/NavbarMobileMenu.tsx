import { toggleCartVisibility } from "@/redux/store/features/cartSlice";
import { CUSTOMPATHS } from "@/util/enums";
import { Category } from "@/util/types/types";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

interface Props {
  categories: any
}

const NavbarMobileMenu: React.FC<Props> = ({categories}) => {

  const dispatch = useDispatch();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const closePopover = () => {
    const menu = document.getElementById("navbar-mobile-menu");
    {/* @ts-ignore */ }
    menu?.hidePopover();
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <ul className="flex flex-col gap-4 text-cc-very-dark-green">
      <li className="flex">
        <Link onClick={closePopover} href={`/`} className={`${isActive('/') ? 'text-cc-light-green' : ''} p-1 hover:text-cc-light-green rounded w-full`}>
          Inicio
        </Link>
      </li>
      <li>
        <details>
          <summary className="cursor-pointer flex items-center gap-2">Categorias <FiChevronLeft className="-rotate-90"/></summary>
          <ul className="ps-4 mt-3">
            {categories && categories.map((category: Category, index: number) => (
              <li key={index} className="flex">
                <Link onClick={closePopover} href={`${CUSTOMPATHS.CATALOG}/${category.slug}`} className={`${isActive(CUSTOMPATHS.CATALOG + `/${category.slug}`) ? 'text-cc-light-green' : 'text-cc-very-dark-green'} py-1 w-full hover:text-cc-light-green`}>
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li className="flex">
        <Link onClick={closePopover} href={`${CUSTOMPATHS.GALLERY}`} className={`${isActive(CUSTOMPATHS.GALLERY) ? 'text-cc-light-green' : ''} p-1 hover:text-cc-light-green w-full`}>
          Galería
        </Link>
      </li>
      <li className="flex">
        <Link onClick={closePopover} href={`${CUSTOMPATHS.CONTACT}`} className={`${isActive(`${CUSTOMPATHS.CONTACT}`) ? 'text-cc-light-green' : ''} p-1 hover:text-cc-light-green w-full`}>
          Sobre nosotros
        </Link>
      </li>
      <li className="mt-10">
        {/* @ts-ignore */}
        <button popovertargetaction="navbar-mobile-menu" onClick={() => {closePopover(), dispatch(toggleCartVisibility())}} className="bg-[#8AAE2D] py-2 px-3 rounded md:py-1 flex items-center gap-1 text-white">
          <span>Mi presupuesto</span>
          <TbShoppingCartQuestion className=""/>
        </button>
      </li>
    </ul>
  )
}

export default NavbarMobileMenu;

