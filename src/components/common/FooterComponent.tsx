import Link from "next/link";
import React from "react";
import { LastInstagramReel } from "./footer/LastInstagramReel";
import { BestProducts } from "./footer/BestProducts";
import { InstagramGallery } from "./footer/InstagramGallery";

const FooterComponent = () => {
  const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN;
  const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(/css/bg-image/footer-top-bg.png)`,
  };

  return (
    <footer
      style={sectionStyle}
      className="w-full bg-footer pt-20 md:pt-28 px-3 md:px-7"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        <div className=" gap-6 grid md:grid-cols-2 lg:grid-cols-4 ">
          <div className=" ">
            {INSTAGRAM_TOKEN && (
              <LastInstagramReel INSTAGRAM_TOKEN={INSTAGRAM_TOKEN} />
            )}
          </div>
          <div className="">
            <h5 className="text-white text-lg  pb-4 font-semibold">
              Félix Menéndez Soluciones Agropecuarias
            </h5>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <span>icon</span>
                <Link className="text-white  hover:text-light" href={""}>
                  Gobernador Cresto 1475, Concordia E.R., Argentina.
                </Link>
              </li>
              <li className="flex items-center  gap-2">
                <span>icon</span>
                <Link className="text-white   hover:text-light" href={""}>
                   +54 0345 421 1515, +54 9 3454 03-7365
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span>icon</span>
                <Link className="text-white text-xs hover:text-light" href={""}>
                   info@solucionesagropecuarias.com.ar 
                </Link>
              </li>
            </ul>
          </div>
          <div className=" ">
            <BestProducts />
          </div>
          <div className=" ">
            {INSTAGRAM_TOKEN && (
              <InstagramGallery INSTAGRAM_TOKEN={INSTAGRAM_TOKEN} />
            )}
          </div>
        </div>

        <div className="w-full flex justify-center border-t-1 border-white/50 mt-10 py-8 ">
          <Link href={"dsnempresas.com.ar"} className="text-white">
            © 2023Felix Menéndez, Soluciones Agropecuarias 2023 bydsn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
