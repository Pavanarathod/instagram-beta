import { HeartIcon, LoginIcon, PlusCircleIcon } from "@heroicons/react/outline";
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
        <div className="flex justify-between items-center px-2 py-2">
          <img src="/images/insta.png" alt="" className="h-14" />
          <div className="flex items-center space-x-2" onClick={signIn}>
            <span className="font-bold">sign in for more</span>
            <LoginIcon className="h-10 text-gray-800 " />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
