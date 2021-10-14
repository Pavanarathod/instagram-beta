import {
  CameraIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  UserGroupIcon,
  LockClosedIcon,
  PaperAirplaneIcon,
  SearchIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { XCircleIcon, HomeIcon } from "@heroicons/react/solid";
import { useState } from "react";
const Header = () => {
  const [active, SetActive] = useState(false);

  const setActiveInput = () => {
    SetActive(true);
  };

  const setDefaultValue = () => {
    SetActive(false);
  };

  return (
    <header className="bg-white border border-gray-300 shadow-sm sticky top-0 z-50">
      <main className="lg:max-w-[935px] lg:mx-auto py-2 px-2 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="sm:hidden">
              <CameraIcon className=" h-7" />
            </div>
            <div className="hidden sm:inline-flex">
              <img src="/images/insta.png" alt="" className="h-8" />
            </div>
          </div>
          <div className="">
            <div className="sm:hidden">
              <img
                src="/images/insta.png"
                alt="logo"
                className="h-11 object-contain"
              />
            </div>
            <div className="hidden sm:inline-flex">
              <form
                className="flex items-center relative"
                onClick={setActiveInput}
              >
                <input
                  type="text"
                  className="bg-gray-100 w-full pl-5 py-1 text-sm focus:outline-none border border-gray-300 focus:border-gray-700 rounded-sm"
                  placeholder={`${active ? "Search" : ""} `}
                />
                {active && (
                  <div
                    onClick={setDefaultValue}
                    className="flex items-center absolute space-x-1 right-0 px-2"
                  >
                    <XCircleIcon className="h-3 text-gray-400 cursor-pointer" />
                  </div>
                )}
                {!active && (
                  <div className="flex items-center absolute space-x-1 right-20">
                    <SearchIcon className="h-3 text-gray-400" />
                    <span className="text-sm text-gray-400">search</span>
                  </div>
                )}
              </form>
            </div>
          </div>
          <div>
            <div className="sm:hidden">
              {/* <img src="/images/send.png" className="h-7" /> */}
              <PaperAirplaneIcon className=" h-7 rotate-45" />
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              <HomeIcon className="header__icons" />
              <PaperAirplaneIcon className="header__icons rotate-45" />
              <PlusCircleIcon className="header__icons" />
              <UserGroupIcon className="header__icons" />
              <HeartIcon className="header__icons" />
              <img
                src="/images/avatar.png"
                alt="img"
                className="h-7 rounded-full"
              />
            </div>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
