import Logo_sm from "../public/logo-white-sm.svg";
import Logo_md from "../public/logo-white-md.svg";
import Link from "next/link";

const github = "https://github.com/dannyrmc/meetingmoods"

const Footer = () => {
  return ( 

    <footer className="w-full h-16 py-3 text-slate-50 bg-gray-900 flex justify-center items-center">

      <div className="flex flex-row justify-between items-center w-full px-2 md:px-12 lg:px-24 xl:px-32">

        <Logo_md className="fill-gray-50 w-[120px] h-12 bg-cover bg-no-repeat inline-block" />

        <div className="flex flex-row">
        <Link className="font-sans font-bold text-gray-50 text-sm mr-4 leading-[120%] select-none grow text-left antialiased cursor-pointer" href={github}>Made by Danny Mc →</Link>
        </div>
      </div>

    </footer>

   );
}
 
export default Footer;