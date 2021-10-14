import { BookmarkAltIcon, DotsHorizontalIcon } from "@heroicons/react/solid";

import {
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";

const PostCard = ({ id, username, userImage, postImage, caption }) => {
  return (
    <div className="bg-white py-3 border border-gray-300">
      <div className="flex justify-between items-center py-2 px-3">
        <div className="flex items-center space-x-3">
          <img
            src={userImage}
            alt="image"
            className="h-8 rounded-full object-contain"
          />
          <h1 className="text-base hover:underline cursor-pointer">
            {username}
          </h1>
        </div>
        <DotsHorizontalIcon className="h-5 text-gray-500" />
      </div>
      <div className="w-full">
        <img src={postImage} alt="post" className="w-full object-contain" />
      </div>
      <div className="flex items-center justify-between py-3 px-3">
        <div className="flex items-center space-x-4">
          <HeartIcon className="post__icons" />
          <ChatIcon className="post__icons" />
          <PaperAirplaneIcon className="post__icons rotate-45" />
        </div>
        <div>
          <BookmarkIcon className="post__icons" />
        </div>
      </div>
      {/* captions */}
    </div>
  );
};

export default PostCard;
