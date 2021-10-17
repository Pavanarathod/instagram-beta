import useFirebaseCollection from "../../../hooks/useFirebaseCollection";
import Spinner from "../Spinner/Spinner";
import PostCard from "./PostCard";

const Posts = () => {
  const [userPosts, loading] = useFirebaseCollection();

  return (
    <div className="mt-8 space-y-4">
      {loading && <Spinner status={loading} />}
      {userPosts.map(
        ({ id, data: { caption, postImage, profileImage, username } }) => (
          <PostCard
            key={id}
            username={username}
            postImage={postImage}
            userImage={profileImage}
            caption={caption}
            id={id}
          />
        )
      )}
    </div>
  );
};

export default Posts;
