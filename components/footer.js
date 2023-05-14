import Logo_sm from "../public/logo-white-sm.svg";
import Logo_md from "../public/logo-white-md.svg";
import Link from "next/link";

const github = "https://github.com/dannyrmc/meetingmoods";

const Footer = () => {
  return (
    <footer className="flex h-16 w-full items-center justify-center bg-gray-950 py-3 text-slate-50">
      <div className="flex w-full flex-row items-center justify-between px-2 md:px-12 lg:px-24 xl:px-32">
        <Logo_md className="inline-block h-12 w-[120px] bg-cover bg-no-repeat fill-gray-50" />

        <div className="flex flex-row">
          <Link
            className="mr-4 grow cursor-pointer select-none text-left font-sans text-sm font-bold leading-[120%] text-gray-50 antialiased"
            href={github}
          >
            Made by Danny Mc →
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
