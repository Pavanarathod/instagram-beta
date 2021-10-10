import { HeartIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon, SearchIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 shadow-sm">
      <div className="flex items-center justify-between py-3 px-3">
        <HomeIcon className="footer__icons" />
        <SearchIcon className="footer__icons" />
        <PlusCircleIcon className="footer__icons" />
        <HeartIcon className="footer__icons" />
        <img src="/images/avatar.png" alt="" className="h-9 w-9 rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;
