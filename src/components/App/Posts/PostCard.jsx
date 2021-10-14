import { BookmarkAltIcon, DotsHorizontalIcon } from "@heroicons/react/solid";

import {
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiSadIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

const PostCard = ({ id, username, userImage, postImage, caption }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-sm">
      <div className="flex justify-between items-center px-3 py-3">
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

      <div className="px-3 pb-3">
        <p className="truncate">
          <span className="mr-2 font-bold">{username}</span>
          {caption}
        </p>
      </div>

      <form className="py-2 px-3 border-t border-gray-300">
        <div className="flex items-center w-full">
          <EmojiHappyIcon className="post__icons" />
          <input
            type="text"
            placeholder="Add a comment"
            className="flex-1 px-3 py-2 focus:outline-none font-mono"
          />
          <span className="font-semibold text-blue-500">Post</span>
        </div>
      </form>
    </div>
  );
};

export default PostCard;
