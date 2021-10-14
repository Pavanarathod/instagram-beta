import PostCard from "./PostCard";

const Posts = () => {
  const dummyPosts = [
    {
      id: 1,
      username: "pavan rathod",
      userImage: "https://links.papareact.com/3ke",
      postImage: "https://links.papareact.com/3ke",
      caption:
        "Building the instagram clone with nextjs and reactjs with google fireabse lolololollllllllllllllllllll",
    },

    {
      id: 1,
      username: "pavan rathod",
      userImage: "https://links.papareact.com/3ke",
      postImage: "https://links.papareact.com/3ke",
      caption:
        "Building the instagram clone with nextjs and reactjs with google fireabse lolololollllllllllllllllllll",
    },
    {
      id: 1,
      username: "pavan rathod",
      userImage: "https://links.papareact.com/3ke",
      postImage: "https://links.papareact.com/3ke",
      caption:
        "Building the instagram clone with nextjs and reactjs with google fireabse lolololollllllllllllllllllll",
    },
    {
      id: 1,
      username: "pavan rathod",
      userImage: "https://links.papareact.com/3ke",
      postImage: "https://links.papareact.com/3ke",
      caption:
        "Building the instagram clone with nextjs and reactjs with google fireabse lolololollllllllllllllllllll",
    },
    {
      id: 1,
      username: "pavan rathod",
      userImage: "https://links.papareact.com/3ke",
      postImage: "https://links.papareact.com/3ke",
      caption:
        "Building the instagram clone with nextjs and reactjs with google fireabse lolololollllllllllllllllllll",
    },
    {
      id: 1,
      username: "pavan rathod",
      userImage: "https://links.papareact.com/3ke",
      postImage: "https://links.papareact.com/3ke",
      caption:
        "Building the instagram clone with nextjs and reactjs with google fireabse lolololollllllllllllllllllll",
    },
    {
      id: 1,
      username: "pavan rathod",
      userImage: "https://links.papareact.com/3ke",
      postImage: "https://links.papareact.com/3ke",
      caption:
        "Building the instagram clone with nextjs and reactjs with google fireabse lolololollllllllllllllllllll",
    },
  ];

  return (
    <div className="mt-8 space-y-4">
      {dummyPosts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default Posts;
