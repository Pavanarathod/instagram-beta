import { DotsHorizontalIcon } from "@heroicons/react/solid";

import {
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../../../database/firebase";

const PostCard = ({ id, username, userImage, postImage, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [commentData, setCommentData] = useState([]);

  const like = async () => {
    try {
    } catch (error) {}
  };

  const comments = async (e) => {
    e.preventDefault();

    const commentSend = comment;

    setComment("");

    await addDoc(collection(database, "posts", id, "comments"), {
      commentText: commentSend,
      username: session?.user?.name,
      userId: session?.user?.email,
      userImage: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  };

  useEffect(() => {
    onSnapshot(
      query(
        collection(database, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setCommentData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      }
    );
  }, []);

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
      {session && (
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
      )}

      <div className="px-3 pb-3">
        <p className="truncate">
          <span className="mr-2 font-bold">{username}</span>
          {caption}
        </p>
      </div>

      {commentData.length > 0 && (
        <div className="ml-10 h-28 overflow-y-scroll scrollbar-thumb-black scrollbar-thin flex flex-col space-y-2">
          {commentData.map(
            ({ id, data: { commentText, username, userImage } }) => (
              <div key={id} className="flex items-center space-x-3">
                <img
                  src={userImage}
                  alt="user"
                  className="h-7 w-7 rounded-full"
                />
                <p className="truncate">
                  {" "}
                  <span className="font-semibold text-gray-900">
                    {username}
                  </span>
                  : {commentText}
                </p>
              </div>
            )
          )}
        </div>
      )}

      {session && (
        <form className="py-2 px-3 border-t border-gray-300">
          <div className="flex items-center w-full">
            <EmojiHappyIcon className="post__icons" />
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              className="flex-1 px-3 py-2 focus:outline-none font-mono"
            />
            <button
              type="submit"
              onClick={comments}
              disabled={!comment.trim()}
              className="font-bold text-blue-500 outline-none focus:outline-none"
            >
              Post
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PostCard;
