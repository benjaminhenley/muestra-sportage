import logoWhite from "../assets/kiaWhite.svg";
import logoBlack from "../assets/kiaBlack.svg";

export default function Navbar({ black }) {
  return (
    <div className="flex justify-between flex-col items-center w-full h-[110px] top-0 ">
      <div className="w-full h-[30px] bg-[#05141F] z-20"></div>
      <div className="flex justify-center items-center w-full px-20 py-6">
        <img
          src={black ? logoBlack : logoWhite}
          alt="logo"
          className="z-20 h-10"
        />
      </div>
    </div>
  );
}
