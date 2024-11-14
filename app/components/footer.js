import Logo from "@/logos/logo-white.svg";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    //For the footer to be fixed, the body needs bottom margin
    <footer className="fixed bottom-0 z-20 flex w-full items-center justify-center bg-gray-950 py-2 text-gray-50 md:py-3">
      <div className="flex w-full flex-row items-center justify-between px-2 md:px-12 lg:px-24 xl:px-32">
        <Logo className="inline-block h-12 w-[120px] bg-cover bg-no-repeat fill-gray-50" />
        <div className="flex flex-row">
          <Link
            className="mr-4 grow cursor-pointer select-none text-left font-sans text-sm font-bold leading-[120%] text-gray-50"
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Made by Danny Mc →
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
