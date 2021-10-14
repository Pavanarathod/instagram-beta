import faker from "faker";
import { useEffect, useState } from "react";
import SuggestionList from "./SuggestionList";

const Suggestions = () => {
  const [suggestion, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(6)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestion);
  }, []);

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-gray-400">Suggestions for you.</h1>
        <span className="text-sm">See All</span>
      </div>

      <div className="mt-4 flex flex-col space-y-1">
        {suggestion.map((sup, index) => (
          <SuggestionList
            key={index}
            image={sup.avatar}
            username={sup.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
