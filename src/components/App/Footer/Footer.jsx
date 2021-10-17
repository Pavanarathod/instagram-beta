import { HeartIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon, SearchIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../redux/reducers/modalSlice";
const Footer = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  return (
    <footer className="bg-white border-t border-gray-300 shadow-sm">
      {session ? (
        <div className="flex items-center justify-between py-3 px-3">
          <HomeIcon className="footer__icons" />
          <SearchIcon className="footer__icons" />
          <PlusCircleIcon
            onClick={() => dispatch(modalActions.enableModal())}
            className="footer__icons"
          />
          <HeartIcon className="footer__icons" />
          <img
            src={session.user.image}
            alt=""
            className="h-9 w-9 rounded-full"
          />
        </div>
      ) : (
        <div className="flex justify-center items-center py-2">
          <button
            onClick={signIn}
            className="px-5 py-3 text-xs bg-gray-900 rounded-lg focus:outline-none text-white"
          >
            sign in to instagram
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
