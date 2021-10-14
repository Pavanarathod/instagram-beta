import faker from "faker";
import { useEffect, useState } from "react";
import StoryCard from "../Card/StoryCard";

const Storys = () => {
  const [suggestion, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestion);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-5 sm:mt-10 border border-gray-200 rounded-sm overflow-x-scroll sm:scrollbar-thin scrollbar-thumb-black">
      {suggestion.map((profile) => (
        <StoryCard
          key={profile.id}
          image={profile.avatar}
          uaername={profile.username}
        />
      ))}
    </div>
  );
};

export default Storys;
