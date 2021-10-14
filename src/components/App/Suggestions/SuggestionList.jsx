const SuggestionList = ({ image, username }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={image} alt="image" className="h-8 w-8 rounded-full" />
        <div>
          <p className="font-semibold text-sm">{username}</p>
          <p className="text-xs text-gray-500">Follows you</p>
        </div>
      </div>
      <span className="text-blue-600">Follow</span>
    </div>
  );
};

export default SuggestionList;
