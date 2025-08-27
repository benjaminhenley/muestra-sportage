import { Link, useNavigate } from "react-router-dom";
import { redes } from "../data/redes";
import Kia from "../assets/Kia.svg";
import React from "react";
import homeIcon from "../assets/home.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#05141F] p-5 md:p-10 lg:p-20 lg:pb-10">
      <div className="flex flex-col md:flex-row md:gap-3 justify-between">
        <div className="w-full md:w-1/3">
          <div className="pb-7 flex justify-start">
            <Link to="/" className="hover:opacity-70 transition-opacity">
              <img src={Kia} alt="Kia" />
            </Link>
          </div>
          <div className="flex pb-3 gap-3">
            {redes.map((item) =>
              item.esExterna ? (
                <a
                  key={item.nombre}
                  href={item.href}
                  target={item.target}
                  rel="noreferrer">
                  <img src={item.logo} alt={item.nombre} />
                </a>
              ) : (
                <Link key={item.nombre} to={item.href}>
                  <img src={item.logo} alt={item.nombre} />
                </Link>
              )
            )}
          </div>
          <hr className="border-t border-[0.5px] border-gray-600 w-full my-5 md:border-none md:hidden" />
        </div>
      </div>
      <div className="text-white flex flex-col gap-2 md:flex-row justify-between pt-7 pb-[50px] text-[0.75rem]">
        <div
          className="flex-row flex items-center cursor-pointer"
          onClick={() => navigate("/")}>
          <img src={homeIcon} width={24} height={24}></img>
          <h5 className="font-bold">Home</h5>
        </div>
        <h5 className="pt-1 font-semibold text-white md:text-end">
          Kia Argentina. Todos los derechos reservados 2025.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
