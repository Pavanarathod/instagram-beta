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
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { database } from "../../../database/firebase";
import Moment from "react-moment";

import { HeartIcon as HertIconFilled } from "@heroicons/react/solid";

const PostCard = ({ id, username, userImage, postImage, caption }) => {
  const { data: session } = useSession();
  const commentRef = useRef();
  const [comment, setComment] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    onSnapshot(collection(database, "posts", id, "likes"), (snapshot) => {
      setLikes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [database, id]);

  useEffect(() => {
    // setHasLiked(
    //   likes.findIndex((like) => like.id === session?.user?.email) !== -1
    // );

    setHasLiked(likes.find((like) => like.id === session?.user?.email));
  }, [likes]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(
        doc(database, "posts", id, "likes", session?.user?.email)
      );
    } else {
      await setDoc(doc(database, "posts", id, "likes", session.user.email), {
        username: session.user.name,
      });
    }
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
  }, [id, database]);

  const commentFocus = () => {
    commentRef.current.focus();
  };

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
            {hasLiked ? (
              <HertIconFilled
                onClick={likePost}
                className="post__icon__liked"
              />
            ) : (
              <HeartIcon onClick={likePost} className="post__icons" />
            )}
            <ChatIcon onClick={commentFocus} className="post__icons" />
            <PaperAirplaneIcon className="post__icons rotate-45" />
          </div>
          <div>
            <BookmarkIcon className="post__icons" />
          </div>
        </div>
      )}

      {likes.length > 0 && (
        <div className="px-3">
          <p>
            Liked by <span className="font-bold">{likes.length}</span> people
          </p>
        </div>
      )}

      <div className="px-3 py-2">
        <p className="truncate">
          <span className="mr-2 font-bold">{username}</span>
          {caption}
        </p>
      </div>

      {commentData.length > 0 && session && (
        <div className="sm:ml-10 px-3 max-h-28 py-3 overflow-y-scroll scrollbar-thumb-black scrollbar-thin flex flex-col space-y-2">
          {commentData.map(
            ({ id, data: { commentText, username, userImage, timestamp } }) => (
              <div
                key={id}
                className="flex items-center justify-between sm:space-x-3 sm:pr-5"
              >
                <div className="flex items-center space-x-2">
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
                <div className="hidden sm:inline-flex">
                  <Moment fromNow>{timestamp?.toDate()}</Moment>
                </div>
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
              ref={commentRef}
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
